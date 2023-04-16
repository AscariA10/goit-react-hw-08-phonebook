import { Outlet, NavLink } from 'react-router-dom';

export const SharedLayout = () => {
   return (
      <>
         <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Log In</NavLink>
         </nav>
         <Outlet />
      </>
   );
};
