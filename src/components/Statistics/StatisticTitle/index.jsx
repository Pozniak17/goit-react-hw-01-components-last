// ✅
import PropTypes from 'prop-types';

import style from './style.module.css';
// Заголовок

const StatisticTitle = ({ text }) => {
  return <h2 className={style.title}>{text.toUpperCase()}</h2>;
};

export default StatisticTitle;

StatisticTitle.propTypes = {
  title: PropTypes.string,
};
