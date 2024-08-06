import React from 'react';
import styled from 'styled-components';

const OrdersContainer = styled.div`
  background-color: #2c2f33;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: #fff;

  th, td {
    padding: 0.5rem;
    text-align: left;
  }

  th {
    background-color: #23272a;
  }

  tr:nth-child(even) {
    background-color: #2c2f33;
  }

  tr:nth-child(odd) {
    background-color: #23272a;
  }
`;

const TableCell = styled.td`
  padding: 0.5rem;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #3c3f43;
`;

const RecentOrders: React.FC = () => {
  return (
    <OrdersContainer>
      <h2>Recent Orders</h2>
      <Table>
        <thead>
          <TableRow>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>Wade Warren</TableCell>
            <TableCell>15478256</TableCell>
            <TableCell>$124.00</TableCell>
            <TableCell>Delivered</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Cooper</TableCell>
            <TableCell>48965786</TableCell>
            <TableCell>$305.02</TableCell>
            <TableCell>Delivered</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Guy Hawkins</TableCell>
            <TableCell>78958215</TableCell>
            <TableCell>$45.88</TableCell>
            <TableCell>Cancelled</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Kristin Watson</TableCell>
            <TableCell>20965732</TableCell>
            <TableCell>$60.00</TableCell>
            <TableCell>Pending</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cody Fisher</TableCell>
            <TableCell>95715620</TableCell>
            <TableCell>$545.00</TableCell>
            <TableCell>Delivered</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Savannah Nguyen</TableCell>
            <TableCell>78514568</TableCell>
            <TableCell>$128.20</TableCell>
            <TableCell>Delivered</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </OrdersContainer>
  );
};

export default RecentOrders;
