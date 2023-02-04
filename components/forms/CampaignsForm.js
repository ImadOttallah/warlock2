import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Button, Form,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { createCampaign, getCampaignCast, updateCampaigns } from '../../utils/data/campaignData';

const initalState = {
  name: '',
  image: '',
  description: '',
  // date_created: '',
  // castCampaign: 0,
};
const CampaignsForm = ({ user, obj }) => {
  const [campaignCast, setCampaignCast] = useState([]);
  const [currentCampaign, setCurrentCampaign] = useState([initalState]);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentCampaign((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const campaign = {
      name: currentCampaign.name,
      image: currentCampaign.image,
      // date_created: new Date().toLocaleDateString(),
      description: currentCampaign.description,
      // castCampaign: Number(currentCampaign.cast_campaign),
      user_id: user.uid,
    };
    console.warn(campaign);
    if (obj?.id) {
      updateCampaigns(campaign, obj.id).then(() => router.push('/campaign'));
    } else {
      createCampaign(campaign).then(() => router.push('/campaigns'));
    }
  };

  useEffect(() => {
    if (obj?.id) {
      const editCampaign = {
        name: obj.name,
        image: obj.image,
        description: obj.description,
        // castCampaign: obj.castCampaign.cast.name,
      };
      setCurrentCampaign(editCampaign);
    }
    getCampaignCast().then(setCampaignCast);
  }, [obj]);
  console.warn(campaignCast);

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
          {/* <Form.Label>Campaign Cast</Form.Label>
          <Form.Select name="currentCampaign" value={currentCampaign.cast_campaign} onChange={handleChange} required>
            <option value="">Select a Campaign Cast</option>
            {campaignCast?.map((cast) => (
              <option key={cast.id} value={cast.id} label={cast.cast.name} />
            ))};
          </Form.Select> */}
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
    castCampaign: PropTypes.shape({
      id: PropTypes.number,
      cast: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        actions: PropTypes.string,
        weapon: PropTypes.string,
        armour: PropTypes.string,
        adventuringSkills: PropTypes.string,
        stamina: PropTypes.string,
        castCategory: PropTypes.shape({
          id: PropTypes.number,
          cast_type: PropTypes.shape({
            name: PropTypes.string,
          }),
        }),
      }),
    }).isRequired,
  }),
};

CampaignsForm.defaultProps = {
  obj: initalState,
};

export default CampaignsForm;
