import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authentification/selectors';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { Bar, NavLink } from './SharedLayout.styled';

export const SharedLayout = () => {
   const isLoggedIn = useSelector(selectIsLoggedIn);
   console.log(isLoggedIn);

   return (
      <>
         {isLoggedIn ? (
            <Bar>
               <NavLink to="/contacts">Contacts</NavLink>
               <UserMenu />
            </Bar>
         ) : (
            <Bar>
               <NavLink to="/">Home</NavLink>
               <NavLink to="/register">Register</NavLink>
               <NavLink to="/login">Log In</NavLink>
               <NavLink to="/contacts">Contacts</NavLink>
            </Bar>
         )}
         <Outlet />
      </>
   );
};
