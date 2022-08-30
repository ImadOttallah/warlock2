/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import CharactersCard from '../components/CharactersCard';
import { getCharacters } from '../api/charactersData';
import SearchCharacters from '../components/SearchCharacters';

function Characters() {
  // TODO: Set a state for books
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the books
  const getAllTheCharacters = () => {
    getCharacters(user.uid).then((charactersArray) => {
      setCharacters(charactersArray);
      setFilteredCharacters(charactersArray);
    });
  };

  // TODO: make the call to the API to get all the books on component render
  useEffect(() => {
    getAllTheCharacters();
  }, []);

  return (
    <div className="text-center my-4">
      <h1>CHARACTERS</h1>
      <div>
        <Link href="/characters/new" passHref>
          <Button variant="dark">Create a Character</Button>
        </Link>
      </div>
      <div>
        <SearchCharacters characters={characters} setFilteredCharacters={setFilteredCharacters} />
      </div>
      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        {filteredCharacters.map((character) => (
          <CharactersCard key={character.firebaseKey} charactersObj={character} onUpdate={getAllTheCharacters} />
        ))}
      </div>
    </div>
  );
}

export default Characters;
