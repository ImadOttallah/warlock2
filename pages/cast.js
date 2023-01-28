// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import {
//   Button, Col, Container, Row,
// } from 'react-bootstrap';
// import { useAuth } from '../utils/context/authContext';
// import CastCard from '../components/mainCards/CastCard';
// // import { getCast } from '../api/castData';
// import SearchCast from '../components/search/SearchCast';

// function Cast() {
//   const [cast, setCast] = useState([]);
//   const [filteredCast, setFilteredCast] = useState([]);
//   const { user } = useAuth();
//   const getAllTheCast = () => {
//     getCast(user.uid).then((castsArray) => {
//       setCast(castsArray);
//       setFilteredCast(castsArray);
//     });
//   };
//   useEffect(() => {
//     getAllTheCast();
//   }, []);

//   return (
//     <div className="text-center my-4">
//       <Container>
//         <Row>
//           <Col>
//             <Link href="/cast/new" passHref>
//               <Button size="sm" variant="dark">
//                 Create Creature
//               </Button>
//             </Link>
//           </Col>
//           <Col>
//             {' '}
//             <SearchCast cast={cast} setFilteredCast={setFilteredCast} />
//           </Col>
//         </Row>
//       </Container>
//       <div className="d-flex flex-wrap">
//         {filteredCast.map((casts) => (
//           <CastCard key={casts.firebaseKey} castObj={casts} onUpdate={getAllTheCast} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cast;
