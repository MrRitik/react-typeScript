
import { useParams } from 'react-router-dom';

type Params = {
  id: string;
};

const UserDetails = () => {
    const { id } = useParams<Params>();
  return (
    <div style={{height:"100vh"}}>
      <h2>User Details</h2>
      <p>
        User ID from URL: <strong>{id}</strong>
      </p>
    </div>
  );
}

export default UserDetails
