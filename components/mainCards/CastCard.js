import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteCast } from '../../utils/data/castData';

function CastCard({
  name,
  description,
  image,
  actions,
  weapon,
  armour,
  adventuringSkills,
  stamina,
  id,
  onUpdate,
}) {
  const deleteThisCast = () => {
    if (window.confirm(`Delete ${name}?`)) {
      deleteCast(id).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={image} alt={name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title> {name}</Card.Title>
        <ul className="list-group">
          <li className="list-group-item">Description: {description}</li>
          <li className="list-group-item">Actions: {actions}</li>
          <li className="list-group-item">Weapon: {weapon}</li>
          <li className="list-group-item">Armour: {armour}</li>
          <li className="list-group-item">Adventuring Skills: {adventuringSkills}</li>
          <li className="list-group-item">Stamina: {stamina}</li>
        </ul>
        <Link href={`/cast/${id}`} passHref>
          <Button size="sm" variant="dark" className="m-2">
            VIEW
          </Button>
        </Link>
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
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  actions: PropTypes.string.isRequired,
  weapon: PropTypes.string.isRequired,
  armour: PropTypes.string.isRequired,
  adventuringSkills: PropTypes.string.isRequired,
  stamina: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CastCard;
