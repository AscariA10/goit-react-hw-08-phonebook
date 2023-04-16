import { ContactInputForm } from '../components/ContactInputForm/ContactInputForm';
import { ContactList } from '../components/ContactList/ContactList';
import { FilterForm } from '../components/FilterForm/FilterForm';
import { Wrapper } from '../components/App.styled';

import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';

export const Home = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchContacts());
   }, [dispatch]);

   return (
      <Wrapper>
         <ContactInputForm />
         <FilterForm />
         <ContactList />
      </Wrapper>
   );
};
