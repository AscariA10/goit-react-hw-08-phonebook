import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authentification/operations';
import { selectUser } from 'redux/authentification/selectors';

import { UserMenuWrapper, UserMail, LogOutButton } from './UserMenu.styled';

export const UserMenu = () => {
   const dispatch = useDispatch();
   const currentUser = useSelector(selectUser);
   const userEmail = currentUser.email;
   console.log(userEmail);

   return (
      <UserMenuWrapper>
         <UserMail>{userEmail}</UserMail>
         <LogOutButton
            type="button"
            onClick={() => {
               dispatch(logOut());
            }}
         >
            LogOut
         </LogOutButton>
      </UserMenuWrapper>
   );
};
