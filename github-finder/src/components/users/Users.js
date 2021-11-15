import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';
import { useContext } from 'react';

const Users = () => {
  const githubContext = useContext(GithubContext);
  if (githubContext.loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {githubContext.users.map((user) => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
