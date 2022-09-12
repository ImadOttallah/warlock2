import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteCast } from '../api/castData';

function CastCard({ castObj, onUpdate }) {
  const deleteThisCast = () => {
    if (window.confirm(`Delete ${castObj.name}?`)) {
      deleteCast(castObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={castObj.image} alt={castObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{castObj.name}</Card.Title>
        <ul className="list-group">
          <li className="list-group-item">Type: {castObj.type}</li>
          <li className="list-group-item">Stamina: {castObj.stamina}</li>
        </ul>
        {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
        <Link href={`/cast/${castObj.firebaseKey}`} passHref>
          <Button size="sm" variant="dark" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        <Link href={`/cast/edit/${castObj.firebaseKey}`} passHref>
          <Button size="sm" variant="dark">EDIT</Button>
        </Link>
        <Button size="sm" variant="danger" onClick={deleteThisCast} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

CastCard.propTypes = {
  castObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    community: PropTypes.string,
    stamina: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CastCard;
