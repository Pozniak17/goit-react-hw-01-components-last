import Profile from './index';

// тут в нас опис пропсів
function UserList({ items }) {
  return (
    <Profile
      username={items.username}
      tag={items.tag}
      location={items.location}
      avatar={items.avatar}
      followers={items.stats.followers}
      views={items.stats.views}
      likes={items.stats.likes}
    />
  );
}

export default UserList;
