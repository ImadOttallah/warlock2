import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Button, Form,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { createCast, getCastCategories, updateCast } from '../../utils/data/castData';

const initalState = {
  name: '',
  notes: '',
  stamina: '',
  castcategory: {
    id: 0,
    casttype: {
      id: 0,
      name: '',
    },
  },
};

const CastForm = ({ user, obj }) => {
  const [castCategory, setcastCategory] = useState([]);
  const [desiredCastCategory, setdesiredCastCategory] = useState([]);
  const [currentCast, setCurrentCast] = useState([initalState]);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'castcategory') {
      setdesiredCastCategory(value);
      setCurrentCast((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setCurrentCast((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    console.warn(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cast = {
      name: currentCast.name,
      notes: currentCast.notes,
      stamina: currentCast.stamina,
      castcategory: desiredCastCategory,
      user_id: user.uid,
    };
    if (obj.id) {
      updateCast(cast, obj.id).then(() => router.push('/cast'));
    } else {
      createCast(cast).then(() => router.push('/casts'));
      console.warn(cast);
      console.warn(castCategory);
    }
  };

  useEffect(() => {
    if (obj.id) {
      const editCast = {
        name: obj.name,
        notes: obj.notes,
        stamina: obj.stamina,
        castcategory: obj.castcategory.casttype,
      };
      setCurrentCast(editCast);
    }
    getCastCategories().then(setcastCategory);
  }, [obj]);
  console.warn(obj);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" required value={currentCast.name} onChange={handleChange} />
          <Form.Label>Notes</Form.Label>
          <Form.Control name="notes" required value={currentCast.notes} onChange={handleChange} />
          <Form.Label>Stamina</Form.Label>
          <Form.Control name="stamina" required value={currentCast.stamina} onChange={handleChange} />
          <Form.Label>Creature Type</Form.Label>

          <Form.Select
            name="castcategory"
            value={currentCast.castcategory}
            onChange={handleChange}
            required
          >
            <option value="">Select a Creature Type</option>

            {castCategory?.map((category) => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.casttype.name}
              </option>
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
    notes: PropTypes.string,
    stamina: PropTypes.string,
    castcategory: PropTypes.shape({
      id: PropTypes.number,
      casttype: PropTypes.shape({
        name: PropTypes.string,
      }),
    }).isRequired,
  }),
};

CastForm.defaultProps = {
  obj: initalState,
};

export default CastForm;
