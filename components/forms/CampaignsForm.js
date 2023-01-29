import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Button, Form,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { createCampaign, updateCampaigns } from '../../utils/data/campaignData';
import { useAuth } from '../../utils/context/authContext';

const initalState = {
  name: '',
  image: '',
  description: '',
};
const CampaignsForm = ({ obj }) => {
  const [formInput, setFormInput] = useState(initalState);
  const [currentCampaign, setCurrentCampaign] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const campaign = {
      name: currentCampaign.name,
      image: currentCampaign.image,
      dateCreated: currentCampaign.dateCreated,
      description: currentCampaign.description,
      user_id: user.uid,
    };
    console.warn(campaign);
    if (obj.id) {
      updateCampaigns(campaign, obj.id).then(() => router.push('/campaigns'));
    } else {
      createCampaign(campaign).then(() => router.push('/campaigns'));
    }
  };

  useEffect(() => {
    if (obj.id) {
      const editCampaign = {
        name: obj.name,
        image: obj.image,
        description: obj.description,
      };
      setCurrentCampaign(editCampaign);
    }
  }, [obj]);
  console.warn(formInput);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" required value={currentCampaign.name} onChange={handleChange} />
          <Form.Label>Image</Form.Label>
          <Form.Control name="image" required value={currentCampaign.image} onChange={handleChange} />
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" required value={currentCampaign.description} onChange={handleChange} />
        </Form.Group>
        {/* TODO: create the rest of the input fields */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

CampaignsForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }),
};

CampaignsForm.defaultProps = {
  obj: initalState,
};

export default CampaignsForm;
