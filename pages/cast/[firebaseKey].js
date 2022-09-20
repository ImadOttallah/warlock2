import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Row, Col, Container, Card,
} from 'react-bootstrap';
import { viewCastDetails } from '../../api/mergedData';

export default function ViewCast() {
  const [castDetails, setCastDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  useEffect(() => {
    viewCastDetails(firebaseKey).then(setCastDetails);
  }, [firebaseKey]);
  return (
    <>
      <Card style={{ width: '40rem', margin: '10px' }}>
        <Container>
          <Row xs={2}>
            <Col xs>
              <ul className="statBlock  ">
                <li>{castDetails.name}</li>
                <li>Type: {castDetails.type}</li>
                <li>Actions: {castDetails.actions}</li>
                <li>Weapons: {castDetails.weapons}</li>
                <li>Armour: {castDetails.armour}</li>
                <li>Adventuring Skills: {castDetails.adventuringSkills}</li>
                <li>Stamina: {castDetails.stamina}</li>
              </ul>
            </Col>
            <Col xs>
              {' '}
              <Card.Img className="sheetImage" variant="top" src={castDetails.image} alt={castDetails.name} />
            </Col>
          </Row>
          <Col xs>Notes: {castDetails.notes}</Col>
          <hr />
          <Row xs={1}>
            <Col xs><div height="100px" className="overflow-scroll">Description: {castDetails.description}</div></Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}
