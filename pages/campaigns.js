// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap';
// import { useRouter } from 'next/router';
// import { getCampaigns } from '../api/campaignsData';
// import CampaignsCard from '../components/mainCards/CampaignCard';

// function Campaigns() {
//   const [campaigns, setCampaigns] = useState([]);
//   const router = useRouter();

//   const getAllTheCampaigns = () => {
//     getCampaigns().then((campaignsArray) => {
//       setCampaigns(campaignsArray);
//     });
//   };

//   useEffect(() => {
//     getAllTheCampaigns();
//   }, []);

//   return (
//     <article className="campaigns">
//       <h1>Campaigns</h1>
//       <Button
//         onClick={() => {
//           router.push('/campaigns/new');
//         }}
//       >
//         Create a Campaign
//       </Button>
//       {campaigns.map((campaign) => (
//         <section key={`campaign--${campaign.id}`} className="campaign">
//           <CampaignsCard
//             id={campaign.id}
//             image={campaign.image}
//             name={campaign.name}
//             description={campaign.description}
//             dateCreated={campaign.dateCreated}
//             onUpdate={getAllTheCampaigns}
//           />
//         </section>
//       ))}
//     </article>
//   );
// }

// export default Campaigns;
