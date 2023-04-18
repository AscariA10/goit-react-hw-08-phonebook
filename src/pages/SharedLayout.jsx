import { Outlet, NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authentification/selectors';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const SharedLayout = () => {
   const isLoggedIn = useSelector(selectIsLoggedIn);
   console.log(isLoggedIn);

   return (
      <>
         {isLoggedIn ? (
            <UserMenu />
         ) : (
            <nav>
               <NavLink to="/">Home</NavLink>
               <NavLink to="/register">Register</NavLink>
               <NavLink to="/login">Log In</NavLink>
               <NavLink to="/contacts">Contacts</NavLink>
            </nav>
         )}
         <Outlet />
      </>
   );
};
