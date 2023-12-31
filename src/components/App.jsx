import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from './Layout';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth/authThunk';
import { RestrictedRoute } from '../guards/RestrictedRoute';
import { PrivateRoute } from '../guards/PrivateRoute';

const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ToursPage = lazy(() => import('../pages/ToursPage/ToursPage'));
const CartPage = lazy(() => import('../pages/CartPage/CartPage'));
const AdminOrdersPage = lazy(() => import('../pages/AdminOrdersPage'));
const SubmittedPage = lazy(() =>
  import('../pages/SubmittedPage/SubmittedPage')
);
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFound'));

function App() {
  const { isRefreshing, user: { role } } = useAuth();
  const isAdmin = role === "admin"
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ToursPage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/" component={<LoginPage />} />
              }
            />
            {/* Admin Routes */}
            {isAdmin && (
              <>
                <Route
                  path="/admin/orders"
                  element={<AdminOrdersPage />} 
                />
              </>
            )}
            {/* User Routes */}
            {!isAdmin && (
              <>
                <Route
                  path="/cart"
                  element={
                    <PrivateRoute
                      redirectTo="/login"
                      component={<CartPage />}
                    />
                  }
                />
                <Route path="/submit" element={<SubmittedPage />} />
              </>
            )}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
