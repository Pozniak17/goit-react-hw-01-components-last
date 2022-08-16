// import PropTypes from 'prop-types';

// тут в нас незалежна розмітка

const Statistics = ({ id, label, percentage }) => {
  return (
    <li key={id} className="item">
      <span className="">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

// Statistics.PropTypes

export default Statistics;

// <ul className="stat-list"></ul>
