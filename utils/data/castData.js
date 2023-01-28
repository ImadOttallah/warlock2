import axios from 'axios';
import { clientCredentials } from '../client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL CAST
const getCast = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/casts`)
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

const createCast = (casts) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/casts`, {
    method: 'POST',
    body: JSON.stringify(casts),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

// DELETE CAST
const deleteSingleCast = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/cast/${firebaseKey}.json`)
    .then(() => {
      getCast(uid).then((castArray) => resolve(castArray));
    })
    .catch((error) => reject(error));
});
const deleteCast = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/cast/${firebaseKey}.json`)
    .then(() => resolve('deleted'))
    .catch((error) => reject(error));
});
// UPDATE CAST
const updateCast = (castObject) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/cast/${castObject.firebaseKey}.json`, castObject)
    .then(() => getCast(castObject.uid).then(resolve))
    .catch(reject);
});
const getSingleCast = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/cast/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export {
  getCast, getSingleCast, deleteSingleCast, updateCast, createCast, deleteCast,
};
