import PropTypes from 'prop-types';
import style from './style.module.css';
// тут в нас незалежна розмітка
import getRandomHexColor from 'components/utils/RandomColors';

const Statistics = ({ key, label, percentage }) => {
  return (
    <li
      key={key}
      className={style.item}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

// Statistics.PropTypes

export default Statistics;

// чому тут string в пропі percentage (data.json), якщо number то консоль видає помилку, а якщо string то все ок
Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};
