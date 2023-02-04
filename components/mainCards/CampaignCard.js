/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteCampaigns } from '../../utils/data/campaignData';

function CampaignsCard({ camObj, onUpdate }) {
  const deleteThisCampaign = () => {
    if (window.confirm(`Delete ${camObj.name}?`)) {
      deleteCampaigns(camObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={camObj.image} alt={camObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title> {camObj.name}</Card.Title>
        <ul className="list-group">
          <li className="list-group-item">Description: {camObj.description}</li>
          <li className="list-group-item">Creatures: {camObj.casts?.map((taco) => (
            <p>{`${taco.name}`}</p>
          ))}
          </li>
          <li className="list-group-item">Npcs: {camObj.npcs?.map((taco) => (
            <p>{`${taco.name}`}</p>
          ))}
          </li>
        </ul>
        <Link href={`/campaigns/edit/${camObj.id}`} passHref>
          <Button size="sm" variant="dark">
            EDIT
          </Button>
        </Link>
        <Button size="sm" variant="danger" onClick={deleteThisCampaign} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

CampaignsCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  castcampaign: PropTypes.shape({
    id: PropTypes.number,
    cast: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      notes: PropTypes.string,
      stamina: PropTypes.string,
      castcategory: PropTypes.shape({
        id: PropTypes.number,
        casttype: PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        }),
      }),
    }),
    npc: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      notes: PropTypes.string,
      stamina: PropTypes.string,
      npccategory: PropTypes.shape({
        id: PropTypes.number,
        npctype: PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        }),
      }),
    }),
  }),
  id: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
}.isRequired;

export default CampaignsCard;
