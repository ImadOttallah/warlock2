import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../../utils/context/authContext';
import NpcForm from '../../../components/forms/NpcForm';
import { getNpcById } from '../../../utils/data/npcData';

function EditNpc() {
  const [editItem, setEditItem] = useState({});
  const { user } = useAuth();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    getNpcById(id).then(setEditItem);
  }, [user, router, id]);
  return (
    <NpcForm user={user} eventObj={editItem} />
  );
}

export default EditNpc;
