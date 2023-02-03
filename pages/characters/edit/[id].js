import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../../utils/context/authContext';
import { getCharactersById } from '../../../utils/data/charactersData';
import CharactersForm from '../../../components/forms/CharactersForm';

function EditCharacter() {
  const [editItem, setEditItem] = useState({});
  const { user } = useAuth();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    getCharactersById(id).then(setEditItem);
  }, [user, router, id]);
  return (
    <CharactersForm user={user} obj={editItem} />
  );
}

export default EditCharacter;
