import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL CAMPAIGNS
const getCampaigns = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/campaigns.json?orderBy="uid"&equalTo="${uid}"`)
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
  axios
    .post(`${dbUrl}/campaigns.json`, campaignsObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/campaigns/${response.data.name}.json`, payload).then(() => {
        getCampaigns(campaignsObj.uid).then(resolve);
      });
    })
    .catch(reject);
});
// DELETE CAMPAIGNS
const deleteSingleCampaign = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/campaigns/${firebaseKey}.json`)
    .then(() => {
      getCampaigns(uid).then((campaignArray) => resolve(campaignArray));
    })
    .catch((error) => reject(error));
});
const deleteCampaigns = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/campaigns/${firebaseKey}.json`)
    .then(() => resolve('deleted'))
    .catch((error) => reject(error));
});
// UPDATE CAMPAIGNS
const updateCampaigns = (campaignsObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/campaigns/${campaignsObj.firebaseKey}.json`, campaignsObj)
    .then(() => getCampaigns(campaignsObj.uid).then(resolve))
    .catch(reject);
});
const getSingleCampaign = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/campaigns/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});
// TODO: GET A SINGLE CAMPAIGN'S CHARACTERS
const getCampaignCharacters = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/characters.json?orderBy="campaign_id"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
const getCampaignCast = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/cast.json?orderBy="campaign_id"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
const getCampaignNpc = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/npc.json?orderBy="campaign_id"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getCampaigns, getCampaignNpc, getSingleCampaign, deleteSingleCampaign, updateCampaigns, createCampaigns, deleteCampaigns, getCampaignCharacters, getCampaignCast,
};
