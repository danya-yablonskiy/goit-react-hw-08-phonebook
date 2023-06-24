import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getStateSelector } from 'store/selector';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { auth } = useSelector(getStateSelector);
  const shouldRedirect = !auth.isLoggedIn && !auth.isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
