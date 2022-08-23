import style from './style.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr>
            <td>{item.type}</td>
            <td>{item.amount} </td>
            <td>{item.currency} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
