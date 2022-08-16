import user from '../user.json';
import data from '../data.json';
import UserList from './Profile/UserList';

import StatisticsList from './Statistics/StatisticsList';
import Statistics from './Statistics';

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

      <Statistics title="Upload stats" stats={data} />
      <StatisticsList stats={data} />
    </div>
  );
};
