import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteCampaigns } from '../api/campaignsData';

function CampaignsCard({ campaignsObj, onUpdate }) {
  const deleteThisCampaign = () => {
    if (window.confirm(`Delete ${campaignsObj.name}?`)) {
      deleteCampaigns(campaignsObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={campaignsObj.image} alt={campaignsObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>Name: {campaignsObj.name}</Card.Title>
        <ul className="list-group">
          <li className="list-group-item">Type: {campaignsObj.description}</li>
          <li className="list-group-item">Date Created: {campaignsObj.dateCreated}</li>
        </ul>
        {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
        <Link href={`/campaigns/${campaignsObj.firebaseKey}`} passHref>
          <Button variant="dark" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        <Link href={`/campaigns/edit/${campaignsObj.firebaseKey}`} passHref>
          <Button variant="dark">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisCampaign} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

CampaignsCard.propTypes = {
  campaignsObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    notes: PropTypes.string,
    dateCreated: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CampaignsCard;
