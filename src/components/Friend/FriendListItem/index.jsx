import style from './style.module.css';

// розмітка li-шки
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
