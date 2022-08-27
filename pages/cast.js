/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import CastCard from '../components/CastCard';
import { getCast } from '../api/castData';

function Cast() {
  // TODO: Set a state for books
  const [cast, setCast] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the books
  const getAllTheCast = () => {
    getCast(user.uid).then(setCast);
  };

  // TODO: make the call to the API to get all the books on component render
  useEffect(() => {
    getAllTheCast();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/cast/new" passHref>
        <Button variant="dark">Create a Cast</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        {cast.map((casts) => (
          <CastCard key={casts.firebaseKey} castObj={casts} onUpdate={getAllTheCast} />
        ))}
      </div>
    </div>
  );
}

export default Cast;
