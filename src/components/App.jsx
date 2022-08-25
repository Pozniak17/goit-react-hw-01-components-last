// JSON файли
import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transaction from '../json/transactions.json';
//

import { Fragment } from 'react';

import Profile from './Profile';

import StatisticTitle from './Statistics/StatisticTitle';
import StatisticSection from './Statistics/StatisticSection';
import StatisticsList from './Statistics/StitisticList';

import FriendList from './Friend/FriendList';
import FriendListItemRender from './Friend/FriendListItem/FriendListItemRender';

import TransactionHistory from './Transaction/TransactionHistory';
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
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <StatisticSection>
        <StatisticTitle text="Upload stats" />
        <StatisticsList stats={data} />
      </StatisticSection>

      <FriendList>
        <FriendListItemRender friends={friends} />
      </FriendList>

      <TransactionHistory items={transaction} />
    </Fragment>
  );
};
