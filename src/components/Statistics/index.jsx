import PropTypes from 'prop-types';

// тут в нас незалежна розмітка

const Statistics = ({ id, title, label, percentage }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        <li key={id} className="item">
          <span className="">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
      </ul>
    </section>
  );
};

// Statistics.PropTypes

export default Statistics;
