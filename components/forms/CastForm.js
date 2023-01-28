// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import {
//   Button, Form, Row, Col, FloatingLabel,
// } from 'react-bootstrap';
// import PropTypes from 'prop-types';
// import { createCast, updateCast } from '../../api/castData';
// import { useAuth } from '../../utils/context/authContext';
// import { getCampaigns } from '../../api/campaignsData';
// import { getCreatureType } from '../../api/typeData';

// const initalState = {
//   name: '',
//   image: '',
//   actions: '',
//   adventuringSkills: '',
//   armour: '',
//   castId: '',
//   campaign_id: '',
//   creatorId: '',
//   description: '',
//   notes: '',
//   stamina: '',
//   type: '',
//   weapon: '',
// };

// function CastForm({ obj }) {
//   const [formInput, setFormInput] = useState(initalState);
//   const [cast, setCast] = useState([]);
//   const [campaigns, setCampaigns] = useState([]);
//   const router = useRouter();
//   const { user } = useAuth();
//   useEffect(() => {
//     getCreatureType(user.uid).then(setCast);
//     if (obj.firebaseKey) setFormInput(obj);
//     getCampaigns(user.uid).then(setCampaigns);
//     if (obj.firebaseKey) setFormInput(obj);
//   }, [obj, user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormInput((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (obj.firebaseKey) {
//       updateCast(formInput).then(() => router.push(`/cast/${obj.firebaseKey}`));
//     } else {
//       const payload = { ...formInput, uid: user.uid };
//       createCast(payload).then(() => {
//         router.push('/cast');
//       });
//     }
//   };
//   return (
//     <Form className="form-floating" onSubmit={handleSubmit}>
//       <h2 className="text-black mt-2">{obj.firebaseKey ? 'Update' : 'Create'} Creature</h2>
//       <Row className="mb-2">
//         <Form.Group as={Col} controlId="formGridName">
//           <FloatingLabel controlId="floatingTextarea" label="Name" className="mb-1">
//             <Form.Control size="sm" type="text" placeholder="Name" name="name" value={formInput.name} onChange={handleChange} required />
//           </FloatingLabel>
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridImage">
//           <FloatingLabel size="sm" controlId="floatingTextarea" label="Image" className="mb-1">
//             <Form.Control size="sm" type="url" placeholder="Image" name="image" value={formInput.image} onChange={handleChange} required />
//           </FloatingLabel>
//         </Form.Group>
//       </Row>

//       <Row className="mb-2">
//         <Form.Group as={Col} controlId="formGridType">
//           {/* <Form.Control size="sm" type="text" placeholder="Type" name="type" value={formInput.type} onChange={handleChange} required /> */}
//           <Form.Select aria-label="Campaign" size="sm" name="campaign_id" value={formInput.campaign_id} onChange={handleChange} className="mb-1" required>
//             <option value="">Select a Campaign</option>
//             <option>none</option>
//             {campaigns.map((campaign) => (
//               <option key={campaign.firebaseKey} value={campaign.firebaseKey}>
//                 {campaign.name}
//               </option>
//             ))}
//           </Form.Select>
//         </Form.Group>
//       </Row>

//       <Row className="mb-2">
//         <Form.Group as={Col} controlId="formGridType">
//           {/* <Form.Control size="sm" type="text" placeholder="Type" name="type" value={formInput.type} onChange={handleChange} required /> */}
//           <Form.Select aria-label="Type" size="sm" name="type" value={formInput.type} onChange={handleChange} className="mb-1" required>
//             <option value="">Select a Type</option>
//             {cast.map((castType) => (
//               <option
//                 key={castType.firebaseKey}
//                 value={castType.name}
//                 // selected={obj.type === castType.name}
//               >
//                 {castType.name}
//               </option>
//             ))}
//           </Form.Select>
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridActions">
//           <FloatingLabel size="sm" controlId="floatingTextarea" label="Actions" className="mb-1">
//             <Form.Control size="sm" type="number" min="0" placeholder="Actions" name="actions" value={formInput.actions} onChange={handleChange} required />
//           </FloatingLabel>
//         </Form.Group>
//       </Row>

//       <Row className="mb-2">
//         <Form.Group as={Col} controlId="formGridWeapon">
//           <FloatingLabel size="sm" controlId="floatingTextarea" label="Weapon" className="mb-1">
//             <Form.Control size="sm" type="text" placeholder="Weapon" name="weapon" value={formInput.weapon} onChange={handleChange} required />
//           </FloatingLabel>
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridAdventuringSkills">
//           <FloatingLabel size="sm" controlId="floatingTextarea" label="Skills" className="mb-1">
//             <Form.Control size="sm" type="number" min="0" placeholder="Skills" name="adventuringSkills" value={formInput.adventuringSkills} onChange={handleChange} required />
//           </FloatingLabel>
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridArmour">
//           <FloatingLabel size="sm" controlId="floatingTextarea" label="Armour" className="mb-1">
//             <Form.Control size="sm" type="number" min="0" placeholder="Armour" name="armour" value={formInput.armour} onChange={handleChange} required />
//           </FloatingLabel>
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridStamina">
//           <FloatingLabel size="sm" controlId="floatingTextarea" label="Stamina" className="mb-1">
//             <Form.Control size="sm" type="number" min="0" placeholder="Stamina" name="stamina" value={formInput.stamina} onChange={handleChange} required />
//           </FloatingLabel>
//         </Form.Group>
//       </Row>

//       <hr />
//       <Row className="mb-2">
//         <Form.Group as={Col} controlId="formGridDescription">
//           <FloatingLabel size="sm" controlId="floatingTextarea" label="Description" className="mb-1">
//             <Form.Control size="sm" type="text" placeholder="Description" name="description" value={formInput.description} onChange={handleChange} required />
//           </FloatingLabel>
//         </Form.Group>
//       </Row>
//       <hr />
//       <Row className="mb-2">
//         <Form.Group as={Col} controlId="formGridNotes">
//           <FloatingLabel size="sm" controlId="floatingTextarea" label="Notes" className="mb-1">
//             <Form.Control size="sm" type="text" placeholder="Notes" name="notes" value={formInput.notes} onChange={handleChange} />
//           </FloatingLabel>
//         </Form.Group>
//       </Row>
//       <Form.Check
//         type="switch"
//         id="public"
//         name="public"
//         label="Is This Cast Public?"
//         checked={formInput.public}
//         onChange={(e) => setFormInput((prevState) => ({
//           ...prevState,
//           public: e.target.checked,
//         }))}
//       />
//       <hr />
//       {/* A WAY TO HANDLE UPDATES FOR TOGGLES, RADIOS, ETC  */}
//       <Button size="sm" variant="dark" type="submit">
//         {obj.firebaseKey ? 'Update' : 'Create'} Creature
//       </Button>
//     </Form>
//   );
// }
// CastForm.propTypes = {
//   obj: PropTypes.shape({
//     actions: PropTypes.string,
//     adventuringSkills: PropTypes.string,
//     armour: PropTypes.string,
//     castId: PropTypes.string,
//     name: PropTypes.string,
//     image: PropTypes.string,
//     creatorId: PropTypes.string,
//     description: PropTypes.string,
//     notes: PropTypes.string,
//     stamina: PropTypes.string,
//     type: PropTypes.string,
//     weapon: PropTypes.string,
//     campaign_id: PropTypes.string,
//     firebaseKey: PropTypes.string,
//   }),
// };

// CastForm.defaultProps = {
//   obj: initalState,
// };

// export default CastForm;
