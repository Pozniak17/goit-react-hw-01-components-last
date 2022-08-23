import PropTypes from 'prop-types';

import getRandomHexColor from '../../utils/RandomColors';
import style from './style.module.css';

// як передати ключ(видає помилку в консолі, пробував через {key} передавши параметром і в {key, children})
const StatisticsList = ({ stats }) => {
  return (
    <ul className={style.list}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className={style.item}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className="label">{label}</span>
          <span className="percentage">{percentage + '%'}</span>
        </li>
      ))}
    </ul>
  );
};

export default StatisticsList;

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
