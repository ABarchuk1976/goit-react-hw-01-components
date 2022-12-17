import styled from 'styled-components';

export const StyledTable = styled.table`
  text-align: center;
  margin: 32px 0;
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

export const TableHeader = styled.thead`
  color: #ffffff;
  background-color: #00bcd5;
  text-transform: uppercase;
  font-weight: 800;
`;

export const TableBody = styled.tbody`
  border-color: #e7e7e7;
`;

export const TableRow = styled.tr`
  &: nth-child(2n) {
    background-color: #ececec;
  }
`;

export const TableCell = styled.td`
  padding: 16px;
  border: 1px solid #e7e7e7;
  border-collapse: collapse;
`;

export const TableCellHeader = styled.th`
  padding: 16px;
  border: 1px solid #ffffff;
  border-collapse: collapse;
`;
