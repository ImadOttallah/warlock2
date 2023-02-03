import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { createCharacters, getCharacters, updateCharacters } from '../../utils/data/charactersData';

const initalState = {
  name: '',
  image: '',
  traits: '',
  notes: '',
  spells: '',
};

const CharactersForm = ({ user, obj }) => {
  // const [formInput, setFormInput] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(initalState);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentCharacter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const character = {
      name: currentCharacter.name,
      image: currentCharacter.image,
      notes: currentCharacter.notes,
      traits: currentCharacter.traits,
      spells: currentCharacter.spells,
      user_id: user.uid,
    };
    if (obj?.id) {
      updateCharacters(character, obj.id).then(() => router.push('/characters'));
    } else {
      createCharacters(character).then(() => router.push('/characters'));
      console.warn(character);
    }
  };

  useEffect(() => {
    if (obj.id) {
      const editCharacter = {
        name: obj.name,
        image: obj.image,
        notes: obj.notes,
        stamina: obj.stamina,
        spells: obj.spells,
        traits: obj.traits,
        // user_id: user.uid,
      };
      setCurrentCharacter(editCharacter);
    }
    getCharacters().then(setCurrentCharacter);
  }, [obj]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" required value={currentCharacter.name} onChange={handleChange} />
          <Form.Label>Image</Form.Label>
          <Form.Control name="image" required value={currentCharacter.image} onChange={handleChange} />
          <Form.Label>Traits</Form.Label>
          <Form.Control name="traits" required value={currentCharacter.traits} onChange={handleChange} />
          <Form.Label>Notes</Form.Label>
          <Form.Control name="notes" required value={currentCharacter.notes} onChange={handleChange} />
          <Form.Label>Spells</Form.Label>
          <Form.Control name="spells" required value={currentCharacter.spells} onChange={handleChange} />

        </Form.Group>
        {/* TODO: create the rest of the input fields */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

CharactersForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    traits: PropTypes.string,
    notes: PropTypes.string,
    spells: PropTypes.string,
  }),
}.isRequired;

CharactersForm.defaultProps = {
  obj: initalState,
};

export default CharactersForm;
