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
			{ items.map(({ id, type, amount, currency }) = (
				<TableRow key={ id }>
					<TableCell>{ type }</TableCell>
        <TableCell>{amount}</TableCell>
					<TableCell>{ currency }</TableCell>
      </TableRow>
			))}
    </TableBody>
		</StyledTable>
);

const StyledTable = styled.table``;

const TableHeader = styled.thead``;

const TableRow = styled.tr``;

const TableRowHead = styled(TableRow)``;

const TableCell = styled.td``;

const TableCellHeader = styled(TableCell)``;

const TableBody = styled.tbody`

`;
