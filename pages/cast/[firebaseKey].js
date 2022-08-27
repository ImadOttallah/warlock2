import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Row, Col, Container, Card,
} from 'react-bootstrap';
import { viewCastDetails } from '../../api/castData';

export default function ViewCast() {
  const [castDetails, setCastDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  useEffect(() => {
    viewCastDetails(firebaseKey).then(setCastDetails);
  }, [firebaseKey]);
  return (
    <>
      <Card style={{ margin: '10px' }}>
        <Container>
          <Row xs={2}>
            <Col xs> Name: {castDetails.name}</Col>
            <Col xs>Image:  <Card.Img variant="top" src={castDetails.image} alt={castDetails.name} style={{ height: '400px' }} /></Col>
          </Row>
          <Col xs>Type: {castDetails.type}</Col>
          <Col xs>Actions: {castDetails.actions}</Col>
          <Col xs>Weapons: {castDetails.weapons}</Col>
          <Col xs>Armour: {castDetails.armour}</Col>
          <Col xs>Adventuring Skills: {castDetails.adventuringSkills}</Col>
          <Col xs>Stamina: {castDetails.stamina}</Col>
          <Col xs>Notes: {castDetails.notes}</Col>
          <hr />
          <Row xs={1}>
            <Col xs>Description: {castDetails.description}</Col>
          </Row>
        </Container>

      </Card>
    </>
  );
}
