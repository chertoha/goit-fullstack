import PropTypes from 'prop-types';
import TransactionHistoryRow from '../TransactionHistoryRow/TransactionHistoryRow';
import {
  TransactionTable,
  TableHeader,
  TableHeaderItem,
  TableRow,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable className="transaction-history">
      <TableHeader>
        <tr>
          <TableHeaderItem>Type</TableHeaderItem>
          <TableHeaderItem>Amount</TableHeaderItem>
          <TableHeaderItem>Currency</TableHeaderItem>
        </tr>
      </TableHeader>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <TransactionHistoryRow
                type={type}
                amount={amount}
                currency={currency}
              />
            </TableRow>
          );
        })}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
