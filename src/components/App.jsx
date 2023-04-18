import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'pages/SharedLayout';
import { Home } from 'pages/Home';
import { Register } from 'pages/Register';
import { LogIn } from 'pages/Login';
import { ContactsPage } from 'pages/ContactsPage';

import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../redux/authentification/selectors';
import { useEffect } from 'react';
import { refreshUser } from 'redux/authentification/operations';
import { RestrictedRoute } from 'pages/RestrictedRoute';
import { PrivateRoute } from 'pages/PrivateRoute';

export const App = () => {
   const dispatch = useDispatch();
   const isRefreshing = useSelector(selectIsRefreshing);

   useEffect(() => {
      dispatch(refreshUser());
   }, [dispatch]);

   return isRefreshing ? (
      <b>Refresh Info...</b>
   ) : (
      <>
         <Routes>
            <Route path="/" element={<SharedLayout />}>
               <Route index element={<Home />} />
               <Route
                  path="/register"
                  element={<RestrictedRoute redirectTo="/contacts" component={<Register />} />}
               />
               <Route
                  path="/login"
                  element={<RestrictedRoute redirectTo="/contacts" component={<LogIn />} />}
               />
               <Route
                  path="/contacts"
                  element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
               />
            </Route>
         </Routes>
      </>
   );
};
