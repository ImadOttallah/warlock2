/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import CharactersCard from '../components/mainCards/CharactersCard';
import { getCharacters } from '../api/charactersData';
import SearchCharacters from '../components/search/SearchCharacters';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const { user } = useAuth();
  const getAllTheCharacters = () => {
    getCharacters(user.uid).then((charactersArray) => {
      setCharacters(charactersArray);
      setFilteredCharacters(charactersArray);
    });
  };
  useEffect(() => {
    getAllTheCharacters();
  }, []);

  return (
    <div className="text-center my-4">
      <title>Characters</title>
      <div>
        <Container>
          <Row>
            <Col>
              <Link href="/characters/new" passHref>
                <Button size="sm" variant="dark">
                  Create a Character
                </Button>
              </Link>
            </Col>
            <Col>
              <SearchCharacters characters={characters} setFilteredCharacters={setFilteredCharacters} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="d-flex flex-wrap">
        {filteredCharacters.map((character) => (
          <CharactersCard key={character.firebaseKey} charactersObj={character} onUpdate={getAllTheCharacters} />
        ))}
      </div>
    </div>
  );
}

export default Characters;
