import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Row, Col, Container, Card,
} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { viewCampaignDetails } from '../../api/mergedData';
import CharactersToken from '../../components/tokenCards/CharactersToken';
import CastToken from '../../components/tokenCards/CastToken';
import NpcToken from '../../components/tokenCards/NpcToken';

export default function ViewCampaigns() {
  const [campaignDetails, setCampaignDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  const removeFunction = () => {
    viewCampaignDetails(firebaseKey).then(setCampaignDetails);
  };
  useEffect(() => {
    removeFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Card style={{ margin: '10px' }}>
        <Container>
          <Row xs={2}>
            <Col xs>
              <ul className="statBlock">
                <li>Name: {campaignDetails.name}</li>
                <li className="list-group-item">Date Created: {campaignDetails.dateCreated}</li>
              </ul>
              <ul className="statBlock">
                <li className="list-group-item">Description: {campaignDetails.description}</li>
              </ul>
            </Col>
            <Col xs>
              <Card.Img variant="top" src={campaignDetails.image} alt={campaignDetails.name} style={{ height: '200px' }} />
            </Col>
          </Row>
          <hr />
          <Row xs={1}>
            <Tabs defaultActiveKey="profile" id="fill-tab-example" className="mb-3" fill>
              <Tab eventKey="characters" title="Characters">
                <Col className="tokenDisplay" xs>
                  {campaignDetails.characters?.map((character) => (
                    <CharactersToken key={character.firebaseKey} charactersObj={character} onUpdate={removeFunction} />
                  ))}
                </Col>
              </Tab>
              <Tab eventKey="creatures" title="Creatures">
                <div className="tokenDisplay">
                  <Col className="tokenDisplay" xs>
                    {campaignDetails.casts?.map((casts) => (
                      <CastToken key={casts.firebaseKey} castObj={casts} onUpdate={removeFunction} />
                    ))}
                  </Col>
                </div>
              </Tab>
              <Tab eventKey="npc" title="Npc">
                <div className="tokenDisplay">
                  <Col className="tokenDisplay" xs>
                    {campaignDetails.npcs?.map((npc) => (
                      <NpcToken key={npc.firebaseKey} npcObj={npc} onUpdate={removeFunction} />
                    ))}
                  </Col>
                </div>
              </Tab>
              <Tab eventKey="notes" title="Notes">
                <Row xs={1}>
                  <Col xs>Notes: {campaignDetails.notes}</Col>
                </Row>
              </Tab>
            </Tabs>
          </Row>
          <hr />
        </Container>
      </Card>
    </>
  );
}
