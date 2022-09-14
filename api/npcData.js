import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL NPC
const getNpc = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/npc.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});
// CREATE NPC
const createNpc = (npcObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/npc.json`, npcObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/npc/${response.data.name}.json`, payload)
        .then(() => {
          getNpc(npcObj.uid).then(resolve);
        });
    }).catch(reject);
});
// DELETE NPC
const deleteSingleNpc = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/npc/${firebaseKey}.json`)
    .then(() => {
      getNpc(uid).then((npcArray) => resolve(npcArray));
    })
    .catch((error) => reject(error));
});
const deleteNpc = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/npc/${firebaseKey}.json`)
    .then(() => resolve('deleted'))
    .catch((error) => reject(error));
});
// UPDATE NPC
const updateNpc = (npcObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/npc/${npcObject.firebaseKey}.json`, npcObject)
    .then(() => getNpc(npcObject.uid).then(resolve))
    .catch(reject);
});
const getSingleNpc = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/npc/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});
// const viewCastDetails = (castFirebaseKey) => new Promise((resolve, reject) => {
//   Promise.all([getSingleCast(castFirebaseKey)])
//     .then(([castObj]) => {
//       resolve({ ...castObj });
//     }).catch((error) => reject(error));
// });

export {
  getNpc,
  getSingleNpc,
  deleteSingleNpc,
  updateNpc,
  createNpc,
  deleteNpc,
  // viewCastDetails,
};
