import style from './style.module.css';

const FriendListItem = props => {
  return (
    <li className={style.item} key={props.id}>
      <span className="status">{props.isOnline}</span>
      <img className="avatar" src={props.avatar} alt="User avatar" width="48" />
      <p className="name">{props.name}</p>
    </li>
  );
};

export default FriendListItem;
