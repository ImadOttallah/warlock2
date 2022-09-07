import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Row, Col, Container, Card,
} from 'react-bootstrap';
import { viewCampaignDetails } from '../../api/mergedData';
import { getCampaignCharacters } from '../../api/campaignsData';
import CharactersToken from '../../components/tokenCards/CharactersToken';
import CastToken from '../../components/tokenCards/CastToken';

export default function ViewCampaigns() {
  const [campaignDetails, setCampaignDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  const removeCast = () => {
    viewCampaignDetails(firebaseKey).then(setCampaignDetails);
  };
  useEffect(() => {
    removeCast();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Card style={{ margin: '10px' }}>
        <Container>
          <Row xs={2}>
            <Col xs> Name: {campaignDetails.name}</Col>
            <Col xs><Card.Img variant="top" src={campaignDetails.image} alt={campaignDetails.name} style={{ height: '200px' }} /></Col>
          </Row>
          <hr />
          <Row xs={1}>
            <Col xs>Description: {campaignDetails.description}</Col>
          </Row>
          <hr />
          <Row xs={1}>
            <Col xs>Notes: {campaignDetails.notes}</Col>
          </Row>
          <hr />
          <Row xs={1}>
            <Col xs> Characters: {campaignDetails.characters?.map((character) => (
              <CharactersToken key={character.firebaseKey} charactersObj={character} onUpdate={getCampaignCharacters} />))}
            </Col>
          </Row>
          <hr />
          <Row xs={1}>
            <Col xs>Cast: {campaignDetails.casts?.map((casts) => (
              <CastToken key={casts.firebaseKey} castObj={casts} onUpdate={removeCast} />))}
            </Col>
          </Row>
        </Container>

      </Card>
    </>
  );
}
