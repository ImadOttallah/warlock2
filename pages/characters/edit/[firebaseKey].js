import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleCharacter } from '../../../api/charactersData';
import CharactersForm from '../../../components/forms/CharactersForm';

export default function EditCharacters() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleCharacter(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to form
  return <CharactersForm obj={editItem} />;
}
