import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Button, Form,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { createNpc, getNpcCategories, updateNpc } from '../../utils/data/npcData';

const initalState = {
  name: '',
  description: '',
  image: '',
  actions: '',
  weapon: '',
  armour: '',
  adventuringSkills: '',
  stamina: '',
  npcCategory: 0,

};

const NpcForm = ({ user, obj }) => {
  const [npcCategory, setNpcCategory] = useState([]);
  const [currentNpc, setCurrentNpc] = useState(initalState);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentNpc((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const npc = {
      name: currentNpc.name,
      description: currentNpc.description,
      image: currentNpc.image,
      actions: currentNpc.actions,
      weapon: currentNpc.weapon,
      armour: currentNpc.armour,
      adventuringSkills: currentNpc.adventuringSkills,
      stamina: currentNpc.stamina,
      npcCategory: Number(currentNpc.npc_category),
      user_id: user.uid,
    };
    if (obj.id) {
      updateNpc(npc, obj.id).then(() => router.push('/npcs'));
    } else {
      createNpc(npc).then(() => router.push('/npcs'));
    }
  };

  useEffect(() => {
    if (obj?.id) {
      const editNpc = {
        name: obj.name,
        description: obj.description,
        image: obj.image,
        actions: obj.actions,
        weapon: obj.weapon,
        armour: obj.armour,
        adventuringSkills: obj.adventuringSkills,
        stamina: obj.stamina,
        npcCategory: obj.npcCategory.npc_type.name,
      };
      setCurrentNpc(editNpc);
    }
    getNpcCategories().then(setNpcCategory);
  }, [obj]);
  console.warn(npcCategory);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" required value={currentNpc.name} onChange={handleChange} />
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" required value={currentNpc.description} onChange={handleChange} />
          <Form.Label>Image</Form.Label>
          <Form.Control name="image" required value={currentNpc.image} onChange={handleChange} />
          <Form.Label>Actions</Form.Label>
          <Form.Control name="actions" required value={currentNpc.actions} onChange={handleChange} />
          <Form.Label>Weapon</Form.Label>
          <Form.Control name="weapon" required value={currentNpc.weapon} onChange={handleChange} />
          <Form.Label>Adventure Skills</Form.Label>
          <Form.Control name="adventuringSkills" required value={currentNpc.adventuringSkills} onChange={handleChange} />
          <Form.Label>Stamina</Form.Label>
          <Form.Control name="stamina" required value={currentNpc.stamina} onChange={handleChange} />
          <Form.Label>Type</Form.Label>
          <Form.Label controlid="floatingSelect">
            <Form.Select aria-label="type" name="type" onChange={handleChange} className="mb-3" value={currentNpc.npc_type} required>
              <option value="">Select a Type</option>
              {npcCategory?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.npc_type.name}
                </option>
              ))}
            </Form.Select>
          </Form.Label>
        </Form.Group>
        {/* TODO: create the rest of the input fields */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

NpcForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    id: PropTypes.number,
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
    npcCategory: PropTypes.shape({
      id: PropTypes.number,
      npc_type: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    }).isRequired,
  }),
};

NpcForm.defaultProps = {
  obj: initalState,
};

export default NpcForm;
