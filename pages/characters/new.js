import { useAuth } from '../../utils/context/authContext';
import CharactersForm from '../../components/forms/CharactersForm';

const NewCharacter = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Create a Character</h2>
      <CharactersForm user={user} />
    </div>
  );
};

export default NewCharacter;
