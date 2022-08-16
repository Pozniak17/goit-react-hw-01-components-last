import style from './style.module.css';
// Заголовок

const StatisticTitle = ({ text }) => {
  return <h2 className={style.title}>{text.toUpperCase()}</h2>;
};

export default StatisticTitle;
