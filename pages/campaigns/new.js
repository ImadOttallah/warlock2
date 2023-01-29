import { useAuth } from '../../utils/context/authContext';
import CampaignsForm from '../../components/forms/CampaignsForm';

const NewCampaign = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Create Campaign</h2>
      <CampaignsForm user={user} />
    </div>
  );
};

export default NewCampaign;
