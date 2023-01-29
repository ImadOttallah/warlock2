import { useAuth } from '../../utils/context/authContext';
import CastForm from '../../components/forms/CastForm';

const NewCast = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Create Creature</h2>
      <CastForm user={user} />
    </div>
  );
};

export default NewCast;
