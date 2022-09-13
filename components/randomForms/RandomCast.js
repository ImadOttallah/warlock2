// import PropTypes from 'prop-types';
// import {
//   Card, Col, Container, Row,
// } from 'react-bootstrap';

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

// function RandomCastForm({ obj }) {
//   const random = {
//     name: '',
//     image: '',
//     actions: '',
//     adventuringSkills: '',
//     armour: '',
//     castId: '',
//     campaign_id: '',
//     creatorId: '',
//     description: '',
//     notes: '',
//     stamina: '',
//     type: '',
//     weapon: '',
//   };
//   useEffect(() => {
//     getCastType(user.uid).then(setCast);
//     if (obj.firebaseKey) setFormInput(obj);
//     getCampaigns(user.uid).then(setCampaigns);
//     if (obj.firebaseKey) setFormInput(obj);
//   }, [obj, user]);

//   return (
//     <>
//       <Card style={{ margin: '10px' }}>
//         <Container>
//           <Row xs={2}>
//             <Col xs>{castDetails.name}</Col>
//             <Col xs>
//               Image: <Card.Img variant="top" src={castDetails.image} alt={castDetails.name} style={{ height: '400px' }} />
//             </Col>
//           </Row>
//           <Col xs>Type: {castDetails.type}</Col>
//           <Col xs>Actions: {castDetails.actions}</Col>
//           <Col xs>Weapons: {castDetails.weapons}</Col>
//           <Col xs>Armour: {castDetails.armour}</Col>
//           <Col xs>Adventuring Skills: {castDetails.adventuringSkills}</Col>
//           <Col xs>Stamina: {castDetails.stamina}</Col>
//           <Col xs>Notes: {castDetails.notes}</Col>
//           <hr />
//           <Row xs={1}>
//             <Col xs>Description: {castDetails.description}</Col>
//           </Row>
//         </Container>
//       </Card>
//     </>
//   );
// }
// RandomCastForm.propTypes = {
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

// RandomCastForm.defaultProps = {
//   obj: initalState,
// };

// export default RandomCastForm;
