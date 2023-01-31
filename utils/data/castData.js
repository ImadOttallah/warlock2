import { clientCredentials } from '../client';

// GET ALL CAST
const getCast = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/casts`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getCastById = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/casts/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// CREATE CAST
const createCast = (cast) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/casts`, {
    method: 'POST',
    body: JSON.stringify(cast),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

// DELETE CAST
const deleteCast = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/casts/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

// UPDATE CAST
const updateCast = (cast, id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/casts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cast),
  })
    .then((response) => resolve(response.data))
    .catch(reject);
});

const getCastCategories = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/cast_categories`)
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

export {
  getCast, getCastById, updateCast, createCast, deleteCast, getCastCategories,
};
