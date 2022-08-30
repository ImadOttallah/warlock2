import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Row, Col, Container, Card,
} from 'react-bootstrap';
import { viewCampaignDetails } from '../../api/campaignsData';

export default function ViewCampaigns() {
  const [campaignDetails, setCampaignDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  useEffect(() => {
    viewCampaignDetails(firebaseKey).then(setCampaignDetails);
  }, [firebaseKey]);
  return (
    <>
      <Card style={{ margin: '10px' }}>
        <Container>
          <Row xs={2}>
            <Col xs> Name: {campaignDetails.name}</Col>
            <Col xs>Image:  <Card.Img variant="top" src={campaignDetails.image} alt={campaignDetails.name} style={{ height: '400px' }} /></Col>
          </Row>
          <hr />
          <Row xs={1}>
            <Col xs>Description: {campaignDetails.description}</Col>
          </Row>
          <Row xs={1}>
            <Col xs>Notes: {campaignDetails.notes}</Col>
          </Row>
        </Container>

      </Card>
    </>
  );
}
