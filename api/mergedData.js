import { getSingleCharacter } from './characters';

const viewCharacterDetails = (characterFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleCharacter(characterFirebaseKey)])
    .then(([characterObj]) => {
      resolve({ ...characterObj });
    }).catch((error) => reject(error));
});

export default viewCharacterDetails;
