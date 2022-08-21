import style from './style.module.css';

const FriendList = ({ children }) => {
  return <ul className={style.list}>{children}</ul>;
};

export default FriendList;
