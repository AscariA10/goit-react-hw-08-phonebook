import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/authentification/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
   const isLoggedIn = useSelector(selectIsLoggedIn);

   console.log(isLoggedIn);

   // const isRefreshing = useSelector(selectIsRefreshing);

   const shouldRedirect = isLoggedIn;

   // const shouldRedirect = !isLoggedIn && !isRefreshing;

   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
