import { useAuth } from '../../utils/context/authContext';
import NpcForm from '../../components/forms/NpcForm';

const NewNpc = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Create Npc</h2>
      <NpcForm user={user} />
    </div>
  );
};

export default NewNpc;
