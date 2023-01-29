import { clientCredentials } from '../client';

const getNpcTypes = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/npc_types`)
    .then((res) => res.json())
    .then(resolve)
    .catch(reject);
});

const getNpcTypesById = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/npc_types/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export { getNpcTypes, getNpcTypesById };
