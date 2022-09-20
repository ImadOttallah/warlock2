/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getNpc } from '../api/npcData';
import NpcCard from '../components/mainCards/NpcCard';
import SearchNpc from '../components/search/SearchNpc';

function Npc() {
  const [npc, setNpc] = useState([]);
  const [filteredNpc, setFilteredNpc] = useState([]);
  const { user } = useAuth();
  const getAllTheNpc = () => {
    getNpc(user.uid).then((npcArray) => {
      setNpc(npcArray);
      setFilteredNpc(npcArray);
    });
  };
  useEffect(() => {
    getAllTheNpc();
  }, []);

  return (
    <div className="text-center my-4">
      <Container>
        <Row>
          <Col>
            <Link href="/npc/new" passHref>
              <Button size="sm" variant="dark">Create Npc</Button>
            </Link>
          </Col>
          <Col> <SearchNpc npc={npc} setFilteredNpc={setFilteredNpc} /></Col>
        </Row>
      </Container>
      <div className="d-flex flex-wrap">
        {filteredNpc.map((npcs) => (
          <NpcCard key={npcs.firebaseKey} npcObj={npcs} onUpdate={getAllTheNpc} />
        ))}
      </div>
    </div>
  );
}

export default Npc;
