import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../../utils/context/authContext';
import CampaignsForm from '../../../components/forms/CampaignsForm';
import { getCampaignById } from '../../../utils/data/campaignData';

function EditCampaign() {
  const [editItem, setEditItem] = useState({});
  const { user } = useAuth();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    getCampaignById(id).then(setEditItem);
  }, [user, router, id]);
  return (
    <CampaignsForm user={user} eventObj={editItem} />
  );
}

export default EditCampaign;
