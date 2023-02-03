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
  console.warn(npcs);
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
            notes={npc.notes}
            stamina={npc.stamina}
            npccategory={npc.npccategory}
            onUpdate={getContent}
          />
        </section>
      ))}
    </article>
  );
}

export default Home;
