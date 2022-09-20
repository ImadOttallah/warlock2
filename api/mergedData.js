import axios from 'axios';
import { clientCredentials } from '../utils/client';
import {
  getCampaignCast, getCampaignCharacters, getCampaignNpc, getSingleCampaign,
} from './campaignsData';
import { getSingleCast } from './castData';
import { getSingleCharacter } from './charactersData';
import { getSingleNpc } from './npcData';

const dbUrl = clientCredentials.databaseURL;

const viewCharacterDetails = (characterFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleCharacter(characterFirebaseKey)])
    .then(([characterObj]) => {
      resolve({ ...characterObj });
    })
    .catch((error) => reject(error));
});
const removeCastfromCampaign = (uid, firebaseKey) => new Promise((resolve, reject) => {
  getCampaignCast(firebaseKey)
    .then((castObj) => {
      resolve({ ...castObj, campaign_id: ' ' });
      // const update = { ...castObj, campaign_id: ' ' };
      // updateCast(update, firebaseKey).then(resolve);
    })
    .catch((error) => reject(error));
});

const viewCampaignDetails = (campaignsFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleCampaign(campaignsFirebaseKey), getCampaignCharacters(campaignsFirebaseKey), getCampaignCast(campaignsFirebaseKey), getCampaignNpc(campaignsFirebaseKey)])
    .then(([campaignsObject, campaignsCharactersArray, campaignsCastArray, campaignsNpcArray]) => {
      resolve({
        ...campaignsObject,
        characters: campaignsCharactersArray,
        casts: campaignsCastArray,
        npcs: campaignsNpcArray,
      });
    })
    .catch((error) => reject(error));
});

const viewCastDetails = (castFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleCast(castFirebaseKey)])
    .then(([castObj]) => {
      resolve({ ...castObj });
    })
    .catch((error) => reject(error));
});
const viewNpcDetails = (npcFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleNpc(npcFirebaseKey)])
    .then(([npcObj]) => {
      resolve({ ...npcObj });
    })
    .catch((error) => reject(error));
});

const getSingleCampaignCast = (campaignId) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/cast.json?orderBy="campaign_id"&equalTo="${campaignId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// const deleteCampaignCast = (campaignId) => new Promise((resolve, reject) => {
//   getCampaignCast(campaignId).then((castArray) => {
//     const deleteCastPromise = castArray.map((cast) => deleteCast(cast.firebaseKey));

//     Promise.all(deleteCastPromise).then(() => {
//       deleteSingleCampaign(campaignId).then(resolve);
//     });
//   }).catch((error) => reject(error));
// });

export {
  viewCharacterDetails, viewNpcDetails, viewCampaignDetails, viewCastDetails, removeCastfromCampaign, getSingleCampaignCast,
};

// const viewCampaignDetails = (campaignsFirebaseKey) => new Promise((resolve, reject) => {
//   getSingleCampaign(campaignsFirebaseKey)
//     .then((campaignsObj) => (Promise.all([getCampaignCharacters(campaignsObj.campaign_id)])
//       .then(([character]) => {
//         resolve({ ...campaignsObj, character });
//       }))).catch((error) => reject(error));
// });
// const viewCampaignDetails = async (campaignsFirebaseKey) => {
//   const campaign = await getSingleCampaign(campaignsFirebaseKey);
//   const characters = await getCampaignCharacters(campaignsFirebaseKey);
//   return {
//     ...campaign,
//     characters,
//   };
// };
// Promise.all([getSingleCampaign(campaignsFirebaseKey)])
//   .then(([campaignsObj]) => {
//     resolve({ ...campaignsObj });
//   }).catch((error) => reject(error));
// });
