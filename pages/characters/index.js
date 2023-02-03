import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { getCharacters } from '../../utils/data/charactersData';
import CharactersCard from '../../components/mainCards/CharactersCard';

function Home() {
  const [characters, setCharacters] = useState([]);
  const router = useRouter();
  const getContent = () => {
    getCharacters().then((data) => setCharacters(data));
  };

  useEffect(() => {
    getContent();
  }, []);
  console.warn(characters);
  return (
    <article className="characters">
      <h1>Characters</h1>
      <Button
        onClick={() => {
          router.push('/characters/new');
        }}
      >
        Create a Character
      </Button>
      {characters.map((character) => (
        <section key={`character--${character.id}`} className="characters">
          <CharactersCard
            id={character.id}
            image={character.image}
            name={character.name}
            traits={character.traits}
            notes={character.notes}
            spells={character.spells}
            onUpdate={getContent}
          />
        </section>
      ))}
    </article>
  );
}

export default Home;
