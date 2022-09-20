import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleNpc } from '../../../api/npcData';
import NpcForm from '../../../components/forms/NpcForm';

export default function EditNpc() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  useEffect(() => {
    getSingleNpc(firebaseKey).then(setEditItem);
  }, [firebaseKey]);
  return (<NpcForm obj={editItem} />);
}
