import user from '../user.json';
import data from '../data.json';
import UserList from './Profile/UserList';

import StatisticsList from './Statistics/StatisticsList';

import StatisticTitle from './StatisticTitle';
import { Fragment } from 'react';

// наша App приймає UserList з пропсом якого items={user}
export const App = () => {
  return (
    <Fragment
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

      <StatisticTitle title="Upload stats" stats={data} />
      <StatisticsList stats={data} />
    </Fragment>
  );
};
