/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import CharactersCard from '../components/CharactersCard';
import { getCharacters } from '../api/characters';

function Characters() {
  // TODO: Set a state for books
  const [characters, setCharacters] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the books
  const getAllTheCharacters = () => {
    getCharacters(user.uid).then(setCharacters);
  };

  // TODO: make the call to the API to get all the books on component render
  useEffect(() => {
    getAllTheCharacters();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/characters/new" passHref>
        <Button variant="dark">Create a Character</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        {characters.map((character) => (
          <CharactersCard key={character.firebaseKey} charactersObj={character} onUpdate={getAllTheCharacters} />
        ))}
      </div>
    </div>
  );
}

export default Characters;
