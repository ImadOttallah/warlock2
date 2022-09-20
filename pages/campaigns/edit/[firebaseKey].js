import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleCampaign } from '../../../api/campaignsData';
import CampaignsForm from '../../../components/forms/CampaignsForm';

export default function EditCampaign() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  useEffect(() => {
    getSingleCampaign(firebaseKey).then(setEditItem);
  }, [firebaseKey]);
  return (<CampaignsForm obj={editItem} />);
}
