import user from '../json/user.json';
import data from '../json/data.json';
import UserList from './Profile/UserList';

import StatisticTitle from './Statistics/StatisticTitle';

import { Fragment } from 'react';
import StatisticSection from './Statistics/StatisticSection';
import StatisticsRender from './Statistics/StatisticsRender';
import StatisticsList from './Statistics/StitisticList';
// import Statistics from './Statistics';

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

      <StatisticSection>
        <StatisticTitle text="Upload stats" stats={data} />

        <StatisticsList>
          <StatisticsRender stats={data} />
        </StatisticsList>
      </StatisticSection>
    </Fragment>
  );
};
