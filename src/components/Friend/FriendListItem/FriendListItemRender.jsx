import FriendListItem from './index';

const FriendListItemRender = ({ friends }) => {
  return friends.map(({ id, isOnline, avatar, name }) => (
    <FriendListItem key={id} isOnline={isOnline} avatar={avatar} name={name} />
  ));
};

export default FriendListItemRender;
