import FriendListItem from './index';
const FriendListItemRender = ({ friends }) => {
  return friends.map(friend => (
    <FriendListItem
      id={friend.id}
      isOnline={friend.isOnline}
      avatar={friend.avatar}
      name={friend.name}
    />
  ));
};

export default FriendListItemRender;
