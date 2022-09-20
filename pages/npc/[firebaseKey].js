import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Row, Col, Container, Card,
} from 'react-bootstrap';
import { viewNpcDetails } from '../../api/mergedData';

export default function ViewNpc() {
  const [npcDetails, setNpcDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  useEffect(() => {
    viewNpcDetails(firebaseKey).then(setNpcDetails);
  }, [firebaseKey]);
  return (
    <>
      <Card style={{ width: '40rem', margin: '10px' }}>
        <Container>
          <Row xs={2}>
            <Col xs>
              <ul className="statBlock">
                <li>{npcDetails.name}</li>
                <li>Type: {npcDetails.type}</li>
                <li>Actions: {npcDetails.actions}</li>
                <li>Weapons: {npcDetails.weapons}</li>
                <li>Armour: {npcDetails.armour}</li>
                <li>Adventuring Skills: {npcDetails.adventuringSkills}</li>
                <li>Stamina: {npcDetails.stamina}</li>
              </ul>
            </Col>
            <Col xs> <Card.Img className="sheetImage" variant="top" src={npcDetails.image} alt={npcDetails.name} /></Col>
          </Row>
          <Col xs>Notes: {npcDetails.notes}</Col>
          <hr />
          <Row xs={1}>
            <Col xs>Description: {npcDetails.description}</Col>
          </Row>
        </Container>

      </Card>
    </>
  );
}
