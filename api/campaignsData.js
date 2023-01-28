// import axios from 'axios';
// import { clientCredentials } from './client';

// const dbUrl = clientCredentials.databaseURL;

// // TEST GET ALL CAMPAIGNS
// const getCampaigns = () => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/campaigns`)
//     .then((response) => {
//       if (response.data) {
//         resolve(Object.values(response.data));
//       } else {
//         resolve([]);
//       }
//     })
//     .catch((error) => reject(error));
// });

// // CREATE CAMPAIGNS
// const createCampaigns = (campaigns) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/campaigns`, {
//     method: 'POST',
//     body: JSON.stringify(campaigns),
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//   })
//     .then((resp) => resolve(resp.json()))
//     .catch(reject);
// });

// // DELETE CAMPAIGNS
// const deleteSingleCampaign = (firebaseKey, uid) => new Promise((resolve, reject) => {
//   axios
//     .delete(`${dbUrl}/campaigns/${firebaseKey}.json`)
//     .then(() => {
//       getCampaigns(uid).then((campaignArray) => resolve(campaignArray));
//     })
//     .catch((error) => reject(error));
// });
// const deleteCampaigns = (firebaseKey) => new Promise((resolve, reject) => {
//   axios
//     .delete(`${dbUrl}/campaigns/${firebaseKey}.json`)
//     .then(() => resolve('deleted'))
//     .catch((error) => reject(error));
// });
// // UPDATE CAMPAIGNS
// const updateCampaigns = (campaignsObj) => new Promise((resolve, reject) => {
//   axios
//     .patch(`${dbUrl}/campaigns/${campaignsObj.firebaseKey}.json`, campaignsObj)
//     .then(() => getCampaigns(campaignsObj.uid).then(resolve))
//     .catch(reject);
// });
// const getSingleCampaign = () => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/campaigns/${id}`)
//     .then((response) => response.json())
//     .then(resolve)
//     .catch(reject);
// });
// // TODO: GET A SINGLE CAMPAIGN'S CHARACTERS
// const getCampaignCharacters = (firebaseKey) => new Promise((resolve, reject) => {
//   axios
//     .get(`${dbUrl}/characters.json?orderBy="campaign_id"&equalTo="${firebaseKey}"`)
//     .then((response) => resolve(Object.values(response.data)))
//     .catch((error) => reject(error));
// });
// const getCampaignCast = (firebaseKey) => new Promise((resolve, reject) => {
//   axios
//     .get(`${dbUrl}/cast.json?orderBy="campaign_id"&equalTo="${firebaseKey}"`)
//     .then((response) => resolve(Object.values(response.data)))
//     .catch((error) => reject(error));
// });
// const getCampaignNpc = (firebaseKey) => new Promise((resolve, reject) => {
//   axios
//     .get(`${dbUrl}/npc.json?orderBy="campaign_id"&equalTo="${firebaseKey}"`)
//     .then((response) => resolve(Object.values(response.data)))
//     .catch((error) => reject(error));
// });

// export {
//   getCampaigns, getCampaignNpc, getSingleCampaign, deleteSingleCampaign, updateCampaigns, createCampaigns, deleteCampaigns, getCampaignCharacters, getCampaignCast,
// };
