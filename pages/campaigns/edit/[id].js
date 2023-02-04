import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../../utils/context/authContext';
import CampaignsForm from '../../../components/forms/CampaignsForm';
import { getCampaignById } from '../../../utils/data/campaignData';

function EditCampaign() {
  const [campaign, setCampaign] = useState({});
  const { user } = useAuth();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    getCampaignById(id).then(setCampaign);
  }, [user, router, id]);
  return (
    <CampaignsForm user={user} obj={campaign} />
  );
}

export default EditCampaign;
