import user from '../user.json';
import UserList from './UserList';

// наша App приймає UserList з пропсом якого items={user}
export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 20,
    //   color: '#010101',
    // }}
    >
      <UserList items={user} />
    </div>
  );
};
