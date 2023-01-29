import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Button, Form,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { createCast, updateCast } from '../../utils/data/castData';

const initalState = {
  name: '',
  description: '',
  image: '',
  actions: '',
  weapon: '',
  armour: '',
  adventuringSkills: '',
  stamina: '',
};

const CastForm = ({ user, obj }) => {
  const [formInput, setFormInput] = useState(initalState);
  const [currentCast, setCurrentCast] = useState([]);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cast = {
      name: currentCast.name,
      description: currentCast.description,
      image: currentCast.image,
      actions: currentCast.actions,
      weapon: currentCast.weapon,
      armour: currentCast.armour,
      adventuringSkills: currentCast.adventuringSkills,
      stamina: currentCast.stamina,
      user_id: user.uid,
    };
    if (obj.id) {
      updateCast(cast, obj.id).then(() => router.push('/casts'));
    } else {
      createCast(cast).then(() => router.push('/casts'));
    }
  };

  useEffect(() => {
    if (obj.id) {
      const editCast = {
        name: obj.name,
        description: obj.description,
        image: obj.image,
        actions: obj.actions,
        weapon: obj.weapon,
        armour: obj.armour,
        adventuringSkills: obj.adventuringSkills,
        stamina: obj.stamina,
      };
      setCurrentCast(editCast);
    }
  }, [obj]);
  console.warn(formInput);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" required value={currentCast.name} onChange={handleChange} />
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" required value={currentCast.description} onChange={handleChange} />
          <Form.Label>Image</Form.Label>
          <Form.Control name="image" required value={currentCast.image} onChange={handleChange} />
          <Form.Label>Actions</Form.Label>
          <Form.Control name="actions" required value={currentCast.actions} onChange={handleChange} />
          <Form.Label>Weapon</Form.Label>
          <Form.Control name="weapon" required value={currentCast.weapon} onChange={handleChange} />
          <Form.Label>Adventure Skills</Form.Label>
          <Form.Control name="description" required value={currentCast.adventuringSkills} onChange={handleChange} />
          <Form.Label>Stamina</Form.Label>
          <Form.Control name="skill" required value={currentCast.stamina} onChange={handleChange} />
        </Form.Group>
        {/* TODO: create the rest of the input fields */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

CastForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    actions: PropTypes.string,
    weapon: PropTypes.string,
    armour: PropTypes.string,
    adventuringSkills: PropTypes.string,
    stamina: PropTypes.string,
  }),
};

CastForm.defaultProps = {
  obj: initalState,
};

export default CastForm;
