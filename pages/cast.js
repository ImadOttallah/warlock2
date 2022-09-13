/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import CastCard from '../components/CastCard';
import { getCast } from '../api/castData';
import SearchCast from '../components/search/SearchCast';

function Cast() {
  // TODO: Set a state for books
  const [cast, setCast] = useState([]);
  const [filteredCast, setFilteredCast] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the books
  const getAllTheCast = () => {
    getCast(user.uid).then((castsArray) => {
      setCast(castsArray);
      setFilteredCast(castsArray);
    });
  };

  // TODO: make the call to the API to get all the books on component render
  useEffect(() => {
    getAllTheCast();
  }, []);

  return (
    <div className="text-center my-4">
      <h1>CAST</h1>
      <Container>
        <Row>
          <Col>
            <Link href="/cast/new" passHref>
              <Button size="sm" variant="dark">Create Cast</Button>
            </Link>
          </Col>
          <Col>
            <Link href="/newRandomCast/randomCast" passHref>
              <Button size="sm" variant="dark">Random Cast</Button>
            </Link>
          </Col>
          <Col> <SearchCast cast={cast} setFilteredCast={setFilteredCast} /></Col>
        </Row>
      </Container>
      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        {filteredCast.map((casts) => (
          <CastCard key={casts.firebaseKey} castObj={casts} onUpdate={getAllTheCast} />
        ))}
      </div>
    </div>
  );
}

export default Cast;
