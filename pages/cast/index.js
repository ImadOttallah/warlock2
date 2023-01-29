import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { getCast } from '../../utils/data/castData';
import CastCard from '../../components/mainCards/CastCard';

function Home() {
  const [casts, setCasts] = useState([]);
  const router = useRouter();
  const getContent = () => {
    getCast().then((data) => setCasts(data));
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <article className="cast">
      <h1>Creatures</h1>
      <Button
        onClick={() => {
          router.push('/cast/new');
        }}
      >
        Create a Creature
      </Button>
      {casts.map((cast) => (
        <section key={`cast--${cast.id}`} className="cast">
          <CastCard
            id={cast.id}
            name={cast.name}
            description={cast.description}
            image={cast.image}
            actions={cast.actions}
            weapon={cast.weapon}
            armour={cast.armour}
            adventuringSkills={cast.adventuring_skills}
            stamina={cast.stamina}
            onUpdate={getContent}
          />
        </section>
      ))}
    </article>
  );
}

export default Home;
