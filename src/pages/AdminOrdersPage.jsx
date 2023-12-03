import Loader from 'components/Loader/Loader';
import OrdersTable from 'components/OrdersList/OrdersList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from 'redux/cart/cartThunk';
import { selectCartLoading, selectaAllOrders } from 'redux/cart/selectors';

function AdminOrdersPage() {
  const dispatch = useDispatch();
  const allOrders = useSelector(selectaAllOrders)
  const isLoading = useSelector(selectCartLoading)

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return <section style={{padding: '50px'}}>
  { isLoading ? <Loader /> : <OrdersTable orders={allOrders} />}
  </section>
}

export default AdminOrdersPage;
