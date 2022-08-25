import PropTypes from 'prop-types';

import style from './style.module.css';
import getRandomHexColor from '../utils/RandomColors';

const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title.toUpperCase()}</h2>
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
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
