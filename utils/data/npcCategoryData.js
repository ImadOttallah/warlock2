import { clientCredentials } from '../client';

const getNpcCategories = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/npc_categories`)
    .then((res) => res.json())
    .then(resolve)
    .catch(reject);
});

const getNpcCategoryById = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/npc_categories/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export { getNpcCategories, getNpcCategoryById };
