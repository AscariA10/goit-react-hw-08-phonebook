import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn, selectIsRefreshing } from 'redux/authentification/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
   const isLoggedIn = useSelector(selectIsLoggedIn);
   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
