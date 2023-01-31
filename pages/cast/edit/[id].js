import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../../utils/context/authContext';
import CastForm from '../../../components/forms/CastForm';
import { getCastById } from '../../../utils/data/castData';

function EditCast() {
  const [cast, setCast] = useState({});
  const { user } = useAuth();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    getCastById(id).then(setCast);
  }, [user, router, id]);
  return (
    <CastForm user={user} eventObj={cast} />
  );
}

export default EditCast;
