import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';

import PropTypes from 'prop-types';
import { DeleteButton, ContactElement, ContactListMarkup } from './ContactList.styled';

export const ContactList = () => {
   const dispatch = useDispatch();
   const { isLoading, error, items } = useSelector(getContacts);

   useEffect(() => {
      dispatch(fetchContacts());
   }, [dispatch]);

   const contactList = items;
   const filteredQuery = useSelector(state => state.filters);

   const filteredList = contactList?.filter(element =>
      element.name?.toLowerCase().includes(filteredQuery)
   );

   return (
      <>
         <p>Contacts</p>
         {isLoading && <p>Loading Contacts...</p>}
         {error && <p>{error}</p>}
         <ContactListMarkup>
            {(filteredList?.length > 0 ? filteredList : contactList)?.map((element, index) => {
               return (
                  <ContactElement key={index}>
                     {element.name}: {element.number}
                     <DeleteButton
                        type="button"
                        onClick={() => dispatch(deleteContact(element.id))}
                     >
                        Delete
                     </DeleteButton>
                  </ContactElement>
               );
            })}
         </ContactListMarkup>
      </>
   );
};

ContactList.propTypes = {
   props: PropTypes.objectOf(PropTypes.function),
};
