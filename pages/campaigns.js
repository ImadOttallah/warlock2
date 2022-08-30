/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getCampaigns } from '../api/campaignsData';
import CampaignsCard from '../components/CampaignCard';

function Campaigns() {
  // TODO: Set a state for books
  const [campaign, setCampaign] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the books
  const getAllTheCampaigns = () => {
    getCampaigns(user.uid).then(setCampaign);
  };

  // TODO: make the call to the API to get all the books on component render
  useEffect(() => {
    getAllTheCampaigns();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/campaigns/new" passHref>
        <Button variant="dark">Create a Campaign</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        {campaign.map((campaigns) => (
          <CampaignsCard key={campaigns.firebaseKey} campaignsObj={campaigns} onUpdate={getAllTheCampaigns} />
        ))}
      </div>
    </div>
  );
}

export default Campaigns;
