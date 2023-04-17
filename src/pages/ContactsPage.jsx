import { ContactInputForm } from '../components/ContactInputForm/ContactInputForm';
import { ContactList } from '../components/ContactList/ContactList';
import { FilterForm } from '../components/FilterForm/FilterForm';
import { Wrapper } from '../components/App.styled';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';

export const ContactsPage = () => {
   const dispatch = useDispatch();
   const isLoading = useSelector(getIsLoading);

   useEffect(() => {
      dispatch(fetchContacts());
   }, [dispatch]);

   return (
      <Wrapper>
         <div>{isLoading && 'Request in progress...'}</div>
         <ContactInputForm />
         <FilterForm />
         <ContactList />
      </Wrapper>
   );
};
