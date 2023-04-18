import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authentification/operations';
import { selectUser } from 'redux/authentification/selectors';

export const UserMenu = () => {
   const dispatch = useDispatch();
   const currentUser = useSelector(selectUser);
   const userEmail = currentUser.email;
   console.log(userEmail);

   return (
      <div>
         <p>{userEmail}</p>
         <button
            type="button"
            onClick={() => {
               dispatch(logOut());
            }}
         >
            LogOut
         </button>
      </div>
   );
};
