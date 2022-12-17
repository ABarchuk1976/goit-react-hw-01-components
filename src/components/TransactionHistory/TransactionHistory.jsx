import PropTypes from 'prop-types';
import * as styledComps from 'components/TransactionHistory/styledTransactionHistory.jsx';

const TransactionHistory = ({ items }) => {
  const {
    StyledTable,
    TableHeader,
    TableRow,
    TableCellHeader,
    TableBody,
    TableCell,
  } = styledComps;
  return (
    <StyledTable>
      <TableHeader>
        <TableRow>
          <TableCellHeader>Type</TableCellHeader>
          <TableCellHeader>Amount</TableCellHeader>
          <TableCellHeader>Currency</TableCellHeader>
        </TableRow>
      </TableHeader>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableCell>{type}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{currency}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
