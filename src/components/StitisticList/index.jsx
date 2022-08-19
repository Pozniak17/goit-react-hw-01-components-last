import style from './style.module.css';

// як передати ключ(видає помилку в консолі, пробував через {key} передавши параметром і в {key, children})
const StatisticsList = ({ children, id }) => {
  return (
    <ul className={style.list}>
      {children} {id}
    </ul>
  );
};

export default StatisticsList;
