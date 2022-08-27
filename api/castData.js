import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL CAST
const getCast = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cast.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});
// CREATE CAST
const createCast = (castObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/cast.json`, castObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/cast/${response.data.name}.json`, payload)
        .then(() => {
          getCast(castObj.uid).then(resolve);
        });
    }).catch(reject);
});
// DELETE CAST
const deleteSingleCast = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/cast/${firebaseKey}.json`)
    .then(() => {
      getCast(uid).then((castArray) => resolve(castArray));
    })
    .catch((error) => reject(error));
});
const deleteCast = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/cast/${firebaseKey}.json`)
    .then(() => resolve('deleted'))
    .catch((error) => reject(error));
});
// UPDATE CAST
const updateCast = (castObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/cast/${castObject.firebaseKey}.json`, castObject)
    .then(() => getCast(castObject.uid).then(resolve))
    .catch(reject);
});
const getSingleCast = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cast/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});
const viewCastDetails = (castFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleCast(castFirebaseKey)])
    .then(([castObj]) => {
      resolve({ ...castObj });
    }).catch((error) => reject(error));
});

export {
  getCast,
  getSingleCast,
  deleteSingleCast,
  updateCast,
  createCast,
  deleteCast,
  viewCastDetails,
};
