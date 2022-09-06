import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteCharacters } from '../../api/charactersData';

function CharactersToken({ charactersObj, onUpdate }) {
  // FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  const deleteThisCharacter = () => {
    if (window.confirm(`Delete ${charactersObj.name}?`)) {
      deleteCharacters(charactersObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <Card border="dark" style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title>Name: {charactersObj.name}</Card.Title>
        <Card.Text>
          <li className="list-group-item">Career: {charactersObj.career}</li>
          <li className="list-group-item">Community: {charactersObj.community}</li>
          <Link href={`/characters/${charactersObj.firebaseKey}`} passHref>
            <Button size="sm" variant="dark" className="m-2">VIEW</Button>
          </Link>
          {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
          <Link href={`/characters/edit/${charactersObj.firebaseKey}`} passHref>
            <Button size="sm" variant="dark">EDIT</Button>
          </Link>
          <Button size="sm" variant="danger" onClick={deleteThisCharacter} className="m-2">
            DELETE
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

CharactersToken.propTypes = {
  charactersObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    career: PropTypes.string,
    community: PropTypes.string,
    stamina: PropTypes.string,
    campaign_id: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CharactersToken;
