import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Button, Form, Row, Col, FloatingLabel,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAuth } from '../../utils/context/authContext';
import { createCampaigns, getCampaigns, updateCampaigns } from '../../api/campaignsData';

const initalState = {
  name: '',
  image: '',
  dateCreated: '',
  description: '',
  notes: '',
  firebaseKey: '',
};

function CampaignsForm({ obj }) {
  const [formInput, setFormInput] = useState(initalState);
  const [campaign, setCampaign] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getCampaigns(user.uid).then(setCampaign);
    console.warn(campaign);
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateCampaigns(formInput).then(() => router.push(`/campaigns/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createCampaigns(payload).then(() => {
        router.push('/campaigns');
      });
    }
  };
  return (
    <Form className="form-floating" onSubmit={handleSubmit}>
      <h2 className="text-black mt-2">{obj.firebaseKey ? 'Update' : 'Create'} Campaign</h2>
      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridName">
          <FloatingLabel controlId="floatingTextarea" label="Name" className="mb-1">
            <Form.Control size="sm" type="text" placeholder="Name" name="name" value={formInput.name} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="formGridImage">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Image" className="mb-1">
            <Form.Control size="sm" type="url" placeholder="Image" name="image" value={formInput.image} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>
      </Row>

      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridDescription">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Description" className="mb-1">
            <Form.Control size="sm" type="text" placeholder="Description" name="description" value={formInput.description} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="formGridNotes">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Notes" className="mb-1">
            <Form.Control size="sm" type="text" placeholder="Notes" name="notes" value={formInput.notes} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>
      </Row>
      <hr />
      {/* A WAY TO HANDLE UPDATES FOR TOGGLES, RADIOS, ETC  */}
      <Button variant="dark" type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Campaign</Button>
    </Form>
  );
}
CampaignsForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    dateCreated: PropTypes.string,
    description: PropTypes.string,
    notes: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

CampaignsForm.defaultProps = {
  obj: initalState,
};

export default CampaignsForm;
