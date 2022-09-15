import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;
const getCastType = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/castType.json?`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});
const getNpcType = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/npcType.json?`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});
const getWeaponType = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/weaponType.json?`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

export {
  getCastType,
  getWeaponType,
  getNpcType,
};
