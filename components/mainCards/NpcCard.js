import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteNpc } from '../../api/npcData';

function NpcCard({ npcObj, onUpdate }) {
  const deleteThisNpc = () => {
    if (window.confirm(`Delete ${npcObj.name}?`)) {
      deleteNpc(npcObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={npcObj.image} alt={npcObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{npcObj.name}</Card.Title>
        <ul className="list-group">
          <li className="list-group-item">Type: {npcObj.type}</li>
          <li className="list-group-item">Stamina: {npcObj.stamina}</li>
        </ul>
        {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
        <Link href={`/npc/${npcObj.firebaseKey}`} passHref>
          <Button size="sm" variant="dark" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        <Link href={`/npc/edit/${npcObj.firebaseKey}`} passHref>
          <Button size="sm" variant="dark">EDIT</Button>
        </Link>
        <Button size="sm" variant="danger" onClick={deleteThisNpc} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

NpcCard.propTypes = {
  npcObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    community: PropTypes.string,
    stamina: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default NpcCard;
