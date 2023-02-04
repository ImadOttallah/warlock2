import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteCharacters } from '../../utils/data/charactersData';

function CharactersCard({
  name,
  image,
  traits,
  notes,
  spells,
  id,
  onUpdate,
}) {
  const deleteThisCharacter = () => {
    if (window.confirm(`Delete ${name}?`)) {
      deleteCharacters(id).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={image} alt={name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title> {name}</Card.Title>
        <ul className="list-group">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Traits: {traits}</li>
          <li className="list-group-item">Notes: {notes}</li>
          <li className="list-group-item">Spells: {spells}</li>
        </ul>
        <Link href={`/characters/${id}`} passHref>
          <Button size="sm" variant="dark" className="m-2">
            VIEW
          </Button>
        </Link>
        <Link href={`/characters/edit/${id}`} passHref>
          <Button size="sm" variant="dark">
            EDIT
          </Button>
        </Link>
        <Button size="sm" variant="danger" onClick={deleteThisCharacter} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

CharactersCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  traits: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  spells: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CharactersCard;
