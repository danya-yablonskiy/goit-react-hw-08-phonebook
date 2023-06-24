import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getStateSelector } from 'store/selector';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { auth } = useSelector(getStateSelector);

  return auth.isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
