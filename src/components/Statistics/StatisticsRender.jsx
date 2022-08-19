import Statistics from './index';

// тут ми створюємо підключення

const StatisticsRender = ({ stats }) => {
  return stats.map(({ id, label, percentage }) => (
    <Statistics id={id} label={label} percentage={percentage + '%'} />
  ));
};

export default StatisticsRender;
