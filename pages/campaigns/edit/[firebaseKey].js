import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleCampaign } from '../../../api/campaignsData';
import CampaignsForm from '../../../components/forms/CampaignsForm';

export default function EditCampaign() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleCampaign(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<CampaignsForm obj={editItem} />);
}
