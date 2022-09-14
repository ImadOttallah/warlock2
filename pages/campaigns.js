/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getCampaigns } from '../api/campaignsData';
import CampaignsCard from '../components/CampaignCard';
import SearchCampaigns from '../components/search/SearchCampaigns';

function Campaigns() {
  const [campaign, setCampaign] = useState([]);
  const [filteredCampaign, setFilteredCampaign] = useState([]);
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the Campaigns
  const getAllTheCampaigns = () => {
    getCampaigns(user.uid).then((campaignsArray) => {
      setCampaign(campaignsArray);
      setFilteredCampaign(campaignsArray);
    });
  };

  // TODO: make the call to the API to get all the Campaigns on component render
  useEffect(() => {
    getAllTheCampaigns();
  }, []);

  return (
    <div className="text-center my-4">
      <Container>
        <Row>
          <Col>
            <Link href="/campaigns/new" passHref>
              <Button size="sm" variant="dark">Create a Campaign</Button>
            </Link>
          </Col>
          <Col> <SearchCampaigns campaign={campaign} setFilteredCampaign={setFilteredCampaign} /></Col>
        </Row>
      </Container>
      {/* <Link href="/campaigns/new" passHref>
        <Button size="sm" variant="dark">Create a Campaign</Button>
      </Link> */}
      <div className="d-flex flex-wrap">
        {filteredCampaign.map((campaigns) => (
          <CampaignsCard key={campaigns.firebaseKey} campaignsObj={campaigns} onUpdate={getAllTheCampaigns} />
        ))}
      </div>
    </div>
  );
}

export default Campaigns;
