import { clientCredentials } from '../client';

// GET ALL CAST
const getNpc = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/npcs`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
const getNpcById = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/npcs/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// CREATE CAST
const createNpc = (npc) => new Promise((resolve, reject) => {
  // const npcObj = {
  //   name: npc.name,
  //   notes: npc.type,
  //   stamina: npc.stamina,
  //   npccategory: npc.npccategory_id,
  fetch(`${clientCredentials.databaseURL}/npcs`, {
    method: 'POST',
    body: JSON.stringify(npc),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

// DELETE CAST
const deleteNpc = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/npcs/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

// UPDATE CAST
const updateNpc = (cast, id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/npcs/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cast),
  })
    .then((response) => resolve(response.data))
    .catch(reject);
});

const getNpcCategories = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/npc_categories`)
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});
export {
  getNpc, getNpcById, updateNpc, createNpc, deleteNpc, getNpcCategories,
};
