// import PropTypes from 'prop-types';
import style from './style.module.css';
// тут в нас незалежна розмітка
import getRandomHexColor from 'components/utils/RandomColors';

const Statistics = ({ id, label, percentage }) => {
  return (
    <li
      key={id}
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
