import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteNpc } from '../../utils/data/npcData';

function NpcCard({
  name,
  notes,
  stamina,
  id,
  npccategory,
  onUpdate,
}) {
  const deleteThisNpc = () => {
    if (window.confirm(`Delete ${name}?`)) {
      deleteNpc(id).then(() => onUpdate());
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
          <li className="list-group-item">Category: {npccategory.npctype.name}</li>
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
  notes: PropTypes.string.isRequired,
  stamina: PropTypes.string.isRequired,
  npccategory: PropTypes.shape({
    id: PropTypes.number,
    npctype: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  id: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default NpcCard;
