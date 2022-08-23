import style from './style.module.css';
import PropTypes from 'prop-types';

const FriendListItem = props => {
  return (
    <li className={style.item} id={props.id}>
      {props.isOnline ? (
        <span className={style.online}>{props.isOnline}</span>
      ) : (
        <span className={style.offline}>{props.isOnline}</span>
      )}

      <img
        className={style.avatar}
        src={props.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={style.name}>{props.name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
