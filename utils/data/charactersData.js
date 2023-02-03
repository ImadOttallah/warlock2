import { clientCredentials } from '../client';

// GET ALL CHARACTERS
const getCharacters = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/characters`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
const getCharactersById = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/characters/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// CREATE CAMPAIGNS
const createCharacters = (character) => new Promise((resolve, reject) => {
//   const obj = {
//     name: character.name,
//     image: character.image,
//     traits: character.traits,
//     notes: character.notes,
//     spells: character.spells,
//     user: character.id,
//   };
//   fetch(`${clientCredentials.databaseURL}/characters`, {
//     method: 'POST',
//     body: JSON.stringify(obj),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => resolve(response.json()))
//     .catch((error) => reject(error));
// });
  fetch(`${clientCredentials.databaseURL}/characters`, {
    method: 'POST',
    body: JSON.stringify(character),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

// DELETE CHARACTERS
const deleteCharacters = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/characters/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

// UPDATE CHARACTERS
const updateCharacters = (character) => new Promise((resolve, reject) => {
  const charObj = {
    id: character.id,
    name: character.name,
    image: character.image,
    traits: character.traits,
    notes: character.notes,
    spells: character.spells,
    user: character.user_id,
  };
  fetch(`${clientCredentials.databaseURL}/characters/${character.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(charObj),
  })
    .then((response) => resolve(response.data))
    .catch(reject);
});

export {
  getCharacters, updateCharacters, createCharacters, deleteCharacters, getCharactersById,
};
