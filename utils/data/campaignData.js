import { clientCredentials } from '../client';

// TEST GET ALL CAMPAIGNS
const getCampaigns = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/campaigns`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getCampaignById = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/campaigns/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// CREATE CAMPAIGNS
const createCampaign = (campaign) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/campaigns`, {
    method: 'POST',
    body: JSON.stringify(campaign),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

// DELETE CAMPAIGNS

const deleteCampaigns = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/campaigns/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

// UPDATE CAMPAIGNS

const updateCampaigns = (campaign) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/campaigns/${campaign.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(campaign),
  })
    .then((response) => resolve(response.data))
    .catch(reject);
});

// TODO: GET A SINGLE CAMPAIGN'S CHARACTERS
const getCampaignCharacters = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/characters`)
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

const getCampaignCast = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/cast_campaigns`)
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

const getCampaignNpc = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/npc_campaigns`)
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

export {
  getCampaigns, getCampaignNpc, updateCampaigns, createCampaign, deleteCampaigns, getCampaignCharacters, getCampaignCast, getCampaignById,
};
