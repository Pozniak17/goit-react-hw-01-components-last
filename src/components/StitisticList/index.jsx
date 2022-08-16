import style from './style.module.css';

const StatisticsList = ({ children }) => {
  return <ul className={style.list}>{children}</ul>;
};

export default StatisticsList;
