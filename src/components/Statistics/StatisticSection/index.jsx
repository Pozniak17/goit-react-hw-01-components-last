// ✅
import style from './style.module.css';

const StatisticSection = ({ children }) => {
  return <section className={style.statistics}>{children}</section>;
};

export default StatisticSection;
