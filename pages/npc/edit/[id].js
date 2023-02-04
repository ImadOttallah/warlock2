import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../../utils/context/authContext';
import NpcForm from '../../../components/forms/NpcForm';
import { getNpcById } from '../../../utils/data/npcData';

function EditNpc() {
  const [npc, setNpc] = useState({});
  const { user } = useAuth();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    getNpcById(id).then(setNpc);
  }, [user, router, id]);
  return (
    <NpcForm user={user} obj={npc} />
  );
}
// change npcObj to obj
export default EditNpc;
