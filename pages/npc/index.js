import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import NpcCard from '../../components/mainCards/NpcCard';
import { getNpc } from '../../utils/data/npcData';

function Home() {
  const [npcs, setNpcs] = useState([]);
  const router = useRouter();
  const getContent = () => {
    getNpc().then((data) => setNpcs(data));
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <article className="npc">
      <h1>Npcs</h1>
      <Button
        onClick={() => {
          router.push('/npc/new');
        }}
      >
        Create a Npc
      </Button>
      {npcs.map((npc) => (
        <section key={`npc--${npc.id}`} className="npc">
          <NpcCard
            id={npc.id}
            name={npc.name}
            description={npc.description}
            image={npc.image}
            actions={npc.actions}
            weapon={npc.weapon}
            armour={npc.armour}
            adventuringSkills={npc.adventuring_skills}
            stamina={npc.stamina}
            onUpdate={getContent}
          />
        </section>
      ))}
    </article>
  );
}

export default Home;
