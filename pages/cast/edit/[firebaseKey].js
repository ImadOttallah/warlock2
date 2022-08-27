import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleCast } from '../../../api/castData';
import CastForm from '../../../components/forms/CastForm';

export default function EditCast() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleCast(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<CastForm obj={editItem} />);
}
