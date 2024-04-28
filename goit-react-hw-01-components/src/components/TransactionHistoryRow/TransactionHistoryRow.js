import PropTypes from 'prop-types';
import { TableCell } from './TransactionHistoryRow.styled';

const TransactionHistoryRow = ({ type, amount, currency }) => {
  return (
    <>
      <TableCell>{type}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{currency}</TableCell>
    </>
  );
};

TransactionHistoryRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryRow;
