import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL CHARACTERS
const getCharacters = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/characters.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});
// CREATE CHARACTERS
const createCharacters = (charactersObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/characters.json`, charactersObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/characters/${response.data.name}.json`, payload)
        .then(() => {
          getCharacters(charactersObj.uid).then(resolve);
        });
    }).catch(reject);
});
// DELETE CHARACTERS
const deleteSingleCharacter = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/characters/${firebaseKey}.json`)
    .then(() => {
      getCharacters(uid).then((characterArray) => resolve(characterArray));
    })
    .catch((error) => reject(error));
});
const deleteCharacters = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/characters/${firebaseKey}.json`)
    .then(() => resolve('deleted'))
    .catch((error) => reject(error));
});
// UPDATE CHARACTERS
const updateCharacters = (charactersObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/characters/${charactersObject.firebaseKey}.json`, charactersObject)
    .then(() => getCharacters(charactersObject.uid).then(resolve))
    .catch(reject);
});
const getSingleCharacter = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/characters/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export {
  getCharacters,
  getSingleCharacter,
  deleteSingleCharacter,
  updateCharacters,
  createCharacters,
  deleteCharacters,
};
