// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
// import { viewSearchDetails } from '../api/mergedData';
// import CampaignsCard from '../components/CampaignCard';
// import CastCard from '../components/CastCard';
// import { useAuth } from '../utils/context/authContext';

// export default function SearchPage() {
//   const { user } = useAuth();
//   const router = useRouter();
//   const [filteredData, setFilteredData] = useState([]);

//   const searchCast = () => {
//     viewSearchDetails(user.uid).then((castArr) => {
//       const value = router.query.keyword;
//       setFilteredData(castArr);
//       const results = castArr.filter((cast) => cast.name.toLowerCase().includes(value.toLowerCase()));
//       setFilteredData(results);
//     });
//   };
//   useEffect(() => {
//     searchCast();
//     setFilteredData([]);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [router.query.keyword]);

//   return (
//     <>
//       <h1>Search Results</h1>
//       <h2>You searched for...{router.query.keyword.toLocaleUpperCase()}</h2>
//       <div>
//         {filteredData.length ? filteredData.map((campaigns) => (
//           <CampaignsCard key={campaigns.firebaseKey} campaignsObj={campaigns} onUpdate={searchCast} />
//         )) : <h2>No Results Found.</h2>}
//         {filteredData.length ? filteredData.map((casts) => (
//           <CastCard key={casts.firebaseKey} castObj={casts} onUpdate={searchCast} />
//         )) : <h2>No Results Found.</h2>}
//       </div>
//     </>
//   );
// }
