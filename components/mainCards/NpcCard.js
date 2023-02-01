import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteNpc } from '../../utils/data/npcData';

function NpcCard({
  name,
  description,
  image,
  actions,
  weapon,
  armour,
  adventuringSkills,
  stamina,
  id,
  npcCategory,
  onUpdate,
}) {
  const deleteThisNpc = () => {
    if (window.confirm(`Delete ${name}?`)) {
      deleteNpc(id).then(() => onUpdate());
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
          <li className="list-group-item">Category: {npcCategory.npc_type.name}</li>
        </ul>
        <Link href={`/npc/${id}`} passHref>
          <Button size="sm" variant="dark" className="m-2">
            VIEW
          </Button>
        </Link>
        <Link href={`/npc/edit/${id}`} passHref>
          <Button size="sm" variant="dark">
            EDIT
          </Button>
        </Link>
        <Button size="sm" variant="danger" onClick={deleteThisNpc} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

NpcCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  actions: PropTypes.string.isRequired,
  weapon: PropTypes.string.isRequired,
  armour: PropTypes.string.isRequired,
  adventuringSkills: PropTypes.string.isRequired,
  stamina: PropTypes.string.isRequired,
  npcCategory: PropTypes.shape({
    id: PropTypes.number,
    npc_type: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  id: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default NpcCard;
