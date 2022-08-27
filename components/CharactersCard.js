import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteCharacters } from '../api/charactersData';

function CharactersCard({ charactersObj, onUpdate }) {
  // FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  const deleteThisCharacter = () => {
    if (window.confirm(`Delete ${charactersObj.name}?`)) {
      deleteCharacters(charactersObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={charactersObj.image} alt={charactersObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>Name: {charactersObj.name}</Card.Title>
        <ul className="list-group">
          <li className="list-group-item">Career: {charactersObj.career}</li>
          <li className="list-group-item">Community: {charactersObj.community}</li>
        </ul>
        {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
        <Link href={`/characters/${charactersObj.firebaseKey}`} passHref>
          <Button variant="dark" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        <Link href={`/characters/edit/${charactersObj.firebaseKey}`} passHref>
          <Button variant="dark">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisCharacter} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

CharactersCard.propTypes = {
  charactersObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    career: PropTypes.string,
    community: PropTypes.string,
    stamina: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CharactersCard;
