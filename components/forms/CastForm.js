import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Button, Form,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { createCast, getCastCategories, updateCast } from '../../utils/data/castData';

const initalState = {
  name: '',
  description: '',
  image: '',
  actions: '',
  weapon: '',
  armour: '',
  adventuringSkills: '',
  stamina: '',
  castCategory: 0,
};

const CastForm = ({ user, obj }) => {
  const [castCategory, setcastCategory] = useState([]);
  const [currentCast, setCurrentCast] = useState([initalState]);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcastCategory((prevState) => ({
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
      castCategory: Number(currentCast.cast_category),
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
        castCategory: obj.castCategory.cast_type.name,
      };
      setCurrentCast(editCast);
    }
    getCastCategories().then(setcastCategory);
  }, [obj]);
  console.warn(castCategory);

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
          <Form.Label>Creature Type</Form.Label>
          <Form.Select name="castCategory" value={currentCast.cast_category} onChange={handleChange} required>
            <option value="">Select a Creature Type</option>
            {castCategory?.map((category) => (
              <option key={category.id} value={category.id} label={category.cast_type.name} />
            ))};
          </Form.Select>
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
    castCategory: PropTypes.shape({
      id: PropTypes.number,
      cast_type: PropTypes.shape({
        name: PropTypes.string,
      }),
    }).isRequired,
  }),
};

CastForm.defaultProps = {
  obj: initalState,
};

export default CastForm;
