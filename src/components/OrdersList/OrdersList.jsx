import OrderRow from './OrderRow/OrderRow';
import { MainTable, Th } from './OrdersList.styled';

const OrdersTable = ({ orders }) => {
  return (
    <MainTable>
      <thead>
        <tr>
          <Th>№</Th>
          <Th>Client Name</Th>
          <Th>Client Last Name</Th>
          <Th>Client Email</Th>
          <Th>Price</Th>
          <Th>Status</Th>
          <Th>Ordered Tours</Th>
          <Th>Edit Status</Th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, idx) => (
          <OrderRow key={order._id} order={order} count={idx + 1} />
        ))}
      </tbody>
    </MainTable>
  );
};

export default OrdersTable;
