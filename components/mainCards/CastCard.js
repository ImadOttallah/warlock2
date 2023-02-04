import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteCast } from '../../utils/data/castData';

function CastCard({
  name,
  notes,
  stamina,
  id,
  castcategory,
  onUpdate,
}) {
  const deleteThisCast = () => {
    if (window.confirm(`Delete ${name}?`)) {
      deleteCast(id).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title> {name}</Card.Title>
        <ul className="list-group">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Notes: {notes}</li>
          <li className="list-group-item">Stamina: {stamina}</li>
          <li className="list-group-item">Category: {castcategory.casttype.name}</li>
        </ul>
        <Link href={`/cast/edit/${id}`} passHref>
          <Button size="sm" variant="dark">
            EDIT
          </Button>
        </Link>
        <Button size="sm" variant="danger" onClick={deleteThisCast} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

CastCard.propTypes = {
  name: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  stamina: PropTypes.string.isRequired,
  castcategory: PropTypes.shape({
    id: PropTypes.number,
    casttype: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  id: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CastCard;
