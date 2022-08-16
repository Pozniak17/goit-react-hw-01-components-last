import user from '../user.json';
import data from '../data.json';
import UserList from './Profile/UserList';

import StatisticTitle from './StatisticTitle';

import style from './Statistics/style.module.css';

import { Fragment } from 'react';
import StatisticsRender from './Statistics/StatisticsRender';
import StatisticsList from './StitisticList';
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

      <section className={style.statistics}>
        <StatisticTitle text="Upload stats" stats={data} />

        <StatisticsList>
          <StatisticsRender stats={data} />
        </StatisticsList>
      </section>
    </Fragment>
  );
};
