import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleCast } from '../../../api/castData';
import CastForm from '../../../components/forms/CastForm';

export default function EditCast() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  useEffect(() => {
    getSingleCast(firebaseKey).then(setEditItem);
  }, [firebaseKey]);
  return (<CastForm obj={editItem} />);
}
