import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleNpc } from '../../../api/npcData';
import NpcForm from '../../../components/forms/NpcForm';

export default function EditNpc() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleNpc(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<NpcForm obj={editItem} />);
}
