import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { getCampaigns } from '../../utils/data/campaignData';
import CampaignsCard from '../../components/mainCards/CampaignCard';

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const router = useRouter();
  const getContent = () => {
    getCampaigns().then((data) => setCampaigns(data));
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <article className="campaigns">
      <h1>Campaigns</h1>
      <Button
        onClick={() => {
          router.push('/campaigns/new');
        }}
      >
        Create a Campaign
      </Button>
      {campaigns.map((campaign) => (
        <section key={`campaign--${campaign.id}`} className="campaign">
          <CampaignsCard
            id={campaign.id}
            image={campaign.image}
            description={campaign.description}
            dateCreated={campaign.dateCreated}
            name={campaign.name}
            onUpdate={getContent}
          />
        </section>
      ))}
    </article>
  );
}
export default Campaigns;
