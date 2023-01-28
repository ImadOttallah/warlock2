import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../../utils/context/authContext';
import { getSingleCampaign } from '../../../api/campaignsData';
import CampaignsForm from '../../../components/forms/CampaignsForm';

function EditCampaign() {
  const [editItem, setEditItem] = useState({});
  const { user } = useAuth();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    getSingleCampaign(id).then(setEditItem);
  }, [user, router, id]);
  return (
    <CampaignsForm user={user} eventObj={editItem} />
  );
}

export default EditCampaign;
