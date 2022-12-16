import PropTypes from 'prop-types';
import styled from 'styled-components';

export const TransactionHistory = ({ items }) => (
  <StyledTable>
    <TableHeader>
      <TableRowHead>
        <TableCellHeader>Type</TableCellHeader>
        <TableCellHeader>Amount</TableCellHeader>
        <TableCellHeader>Currency</TableCellHeader>
      </TableRowHead>
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

const StyledTable = styled.table`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 450px;
  border-radius: 5px;
  border-spacing: 0;
  box-shadow: 10px 10px 5px -1px rgba(0, 0, 0, 0.5);
  color: #808080;
  background-color: #ffffff;
  font-size: 14px;
`;

const TableHeader = styled.thead`
  color: #ffffff;
  background-color: #00bcd5;
  text-transform: uppercase;
  font-weight: 800;
`;

const TableBody = styled.tbody`
  border-color: #e7e7e7;
`;

const TableRow = styled.tr`
  &: nth-child(2n) {
    background-color: #ececec;
  } ;
`;

const TableRowHead = styled(TableRow)``;

const TableCell = styled.td`
  padding: 16px;
  border: 1px solid #e7e7e7;
  border-collapse: collapse;
`;

const TableCellHeader = styled.th`
  padding: 16px;
  border: 1px solid #ffffff;
  border-collapse: collapse;
`;
