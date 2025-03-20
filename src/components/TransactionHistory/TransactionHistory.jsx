import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  const transactions = items.map(item => (
    <tr key={item.id} className={css.transaction}>
      <td className={css.transactionItem}>{item.type}</td>
      <td className={css.transactionItem}>{item.amount}</td>
      <td className={css.transactionItem}>{item.currency}</td>
    </tr>
  ));
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.tableTitles}>Type</th>
          <th className={css.tableTitles}>Amount</th>
          <th className={css.tableTitles}>Currency</th>
        </tr>
      </thead>

      <tbody>{transactions}</tbody>
    </table>
  );
};

export default TransactionHistory;
