import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteCampaigns } from '../../api/campaignsData';

function CampaignsCard({
  image,
  name,
  description,
  dateCreated,
  id,
  onUpdate,
}) {
  const deleteThisCampaign = () => {
    if (window.confirm(`Delete ${name}?`)) {
      deleteCampaigns(id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={image} alt={name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title> {name}</Card.Title>
        <ul className="list-group">
          <li className="list-group-item">Type: {description}</li>
          <li className="list-group-item">Date Created: {dateCreated}</li>
        </ul>
        <Link href={`/campaigns/${id}`} passHref>
          <Button size="sm" variant="dark" className="m-2">
            VIEW
          </Button>
        </Link>
        <Link href={`/campaigns/edit/${id}`} passHref>
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
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CampaignsCard;
