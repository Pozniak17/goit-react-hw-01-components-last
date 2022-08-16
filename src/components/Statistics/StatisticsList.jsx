import Statistics from './index';

// тут ми створюємо підключення

function StatisticsList({ stats }) {
  return stats.map(statistic => (
    <Statistics
      id={statistic.id}
      label={statistic.label}
      percentage={statistic.percentage}
    />
  ));
}

export default StatisticsList;
