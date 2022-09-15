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
      <Card style={{ margin: '10px' }}>
        <Container>
          <Row xs={2}>
            <Col xs>{npcDetails.name}</Col>
            <Col xs>Image:  <Card.Img variant="top" src={npcDetails.image} alt={npcDetails.name} style={{ height: '400px' }} /></Col>
          </Row>
          <Col xs>Type: {npcDetails.type}</Col>
          <Col xs>Actions: {npcDetails.actions}</Col>
          <Col xs>Weapons: {npcDetails.weapons}</Col>
          <Col xs>Armour: {npcDetails.armour}</Col>
          <Col xs>Adventuring Skills: {npcDetails.adventuringSkills}</Col>
          <Col xs>Stamina: {npcDetails.stamina}</Col>
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
