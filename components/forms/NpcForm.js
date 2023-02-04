import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Button, Form,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { createNpc, getNpcCategories, updateNpc } from '../../utils/data/npcData';

const initalState = {
  name: '',
  notes: '',
  stamina: '',
  npccategory: {
    id: 0,
    npctype: {
      id: 0,
      name: '',
    },
  },

};

const NpcForm = ({ user, obj }) => {
  const [npcCategory, setNpcCategory] = useState([]);
  const [desiredNpcCategory, setdesiredNpcCategory] = useState([]);
  const [currentNpc, setCurrentNpc] = useState(initalState);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'npccategory') {
      setdesiredNpcCategory(value);
      setCurrentNpc((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setCurrentNpc((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    console.warn(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const npc = {
      name: currentNpc.name,
      notes: currentNpc.notes,
      stamina: currentNpc.stamina,
      npccategory: desiredNpcCategory,
      user_id: user.uid,
    };
    console.warn(npc);
    if (obj.id) {
      updateNpc(npc, obj.id).then(() => router.push('/npc'));
    } else {
      createNpc(npc).then(() => router.push('/npcs'));
    }
  };

  useEffect(() => {
    if (obj.id) {
      const editNpc = {
        name: obj.name,
        notes: obj.notes,
        stamina: obj.stamina,
        npccategory: obj.npccategory.npctype,
      };
      setCurrentNpc(editNpc);
    }
    getNpcCategories().then(setNpcCategory);
  }, [obj]);
  // console.warn(obj);
  // console.warn(npcCategory);
  // console.warn(currentNpc);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" required value={currentNpc.name} onChange={handleChange} />
          <Form.Label>Notes</Form.Label>
          <Form.Control name="notes" required value={currentNpc.notes} onChange={handleChange} />
          <Form.Label>Stamina</Form.Label>
          <Form.Control name="stamina" required value={currentNpc.stamina} onChange={handleChange} />
          <Form.Label>Npc Type</Form.Label>
          <Form.Select
            name="npccategory"
            value={currentNpc.npccategory}
            onChange={handleChange}
            required
          >

            <option value="">Select a Npc Type</option>

            {npcCategory?.map((category) => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.npctype.name}
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

NpcForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    notes: PropTypes.string,
    stamina: PropTypes.string,
    npccategory: PropTypes.shape({
      id: PropTypes.number,
      npctype: PropTypes.shape({
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

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import {
//   Button, Form,
// } from 'react-bootstrap';
// import PropTypes from 'prop-types';
// import { createNpc, getNpcCategories, updateNpc } from '../../utils/data/npcData';

// const initalState = {
//   name: '',
//   notes: '',
//   stamina: '',
//   npccategory: {
//     id: 0,
//     npctype: {
//       id: 0,
//       name: '',
//     },
//   },

// };

// const NpcForm = ({ npcObj }) => {
//   const [desiredNpcCategory, setdesiredNpcCategory] = useState([]);
//   const [currentNpc, setCurrentNpc] = useState(initalState);
//   const router = useRouter();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentNpc((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (npcObj?.id) {
//       updateNpc(currentNpc, npcObj.id).then(() => router.push('/npcs'));
//     } else {
//       createNpc(currentNpc).then(() => router.push('/npcs'));
//     }
//   };
//   useEffect(() => {
//     getNpcCategories().then(setdesiredNpcCategory);
//     if (npcObj?.id) {
//       setCurrentNpc(npcObj);
//     }
//   }, [npcObj]);

//   return (
//     <>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>Name</Form.Label>
//           <Form.Control name="name" required value={currentNpc.name} onChange={handleChange} />
//           <Form.Label>Notes</Form.Label>
//           <Form.Control name="notes" required value={currentNpc.notes} onChange={handleChange} />
//           <Form.Label>Stamina</Form.Label>
//           <Form.Control name="stamina" required value={currentNpc.stamina} onChange={handleChange} />
//           <Form.Label>Npc Type</Form.Label>
//           <Form.Select name="npccategory" value={currentNpc.npccategory?.id} onChange={handleChange} required>
//             <option value="">Select a Npc Type</option>
//             {desiredNpcCategory?.map((category) => (
//               <option
//                 key={category.id}
//                 value={category.id}
//                 selected={npcObj?.npccategory === category.id}
//               >
//                 {category.npctype.name}
//               </option>
//             ))}
//           </Form.Select>
//         </Form.Group>
//         {/* TODO: create the rest of the input fields */}

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </>
//   );
// };

// NpcForm.propTypes = {
//   user: PropTypes.shape({
//     uid: PropTypes.string,
//     id: PropTypes.number,
//   }).isRequired,
//   npcObj: PropTypes.shape({
//     id: PropTypes.number,
//     name: PropTypes.string,
//     notes: PropTypes.string,
//     stamina: PropTypes.string,
//     npccategory: PropTypes.shape({
//       id: PropTypes.number,
//       npctype: PropTypes.shape({
//         id: PropTypes.number,
//         name: PropTypes.string,
//       }),
//     }),
//   }).isRequired,
// };

// export default NpcForm;
