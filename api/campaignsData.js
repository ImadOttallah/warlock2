import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL CAMPAIGNS
const getCampaigns = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/campaigns.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});
// CREATE CAMPAIGNS
const createCampaigns = (campaignsObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/campaigns.json`, campaignsObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/campaigns/${response.data.name}.json`, payload)
        .then(() => {
          getCampaigns(campaignsObj.uid).then(resolve);
        });
    }).catch(reject);
});
// DELETE CAMPAIGNS
const deleteSingleCampaign = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/campaigns/${firebaseKey}.json`)
    .then(() => {
      getCampaigns(uid).then((campaignArray) => resolve(campaignArray));
    })
    .catch((error) => reject(error));
});
const deleteCampaigns = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/campaigns/${firebaseKey}.json`)
    .then(() => resolve('deleted'))
    .catch((error) => reject(error));
});
// UPDATE CAMPAIGNS
const updateCampaigns = (campaignsObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/campaigns/${campaignsObj.firebaseKey}.json`, campaignsObj)
    .then(() => getCampaigns(campaignsObj.uid).then(resolve))
    .catch(reject);
});
const getSingleCampaign = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/campaigns/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});
const viewCampaignDetails = (campaignsFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([deleteSingleCampaign(campaignsFirebaseKey)])
    .then(([campaignsObj]) => {
      resolve({ ...campaignsObj });
    }).catch((error) => reject(error));
});

export {
  getCampaigns,
  getSingleCampaign,
  deleteSingleCampaign,
  updateCampaigns,
  createCampaigns,
  deleteCampaigns,
  viewCampaignDetails,
};
