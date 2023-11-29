import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from './Layout';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth/authThunk';
import { RestrictedRoute } from '../guards/RestrictedRoute';
// import { PrivateRoute } from '../guards/PrivateRoute';

const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ToursPage = lazy(() => import('../pages/ToursPage'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFound'));

function App() {
  const { isRefreshing } = useAuth();
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
                <RestrictedRoute
                  redirectTo="/"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/"
                  component={<LoginPage />}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
