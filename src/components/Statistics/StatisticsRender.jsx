import Statistics from './index';

// тут ми створюємо підключення

const StatisticsRender = ({ stats }) => {
  return stats.map(statistic => (
    <Statistics
      id={statistic.id}
      label={statistic.label}
      percentage={statistic.percentage}
    />
  ));
};

export default StatisticsRender;
