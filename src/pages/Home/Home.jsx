// import { ContactInputForm } from '../components/ContactInputForm/ContactInputForm';
// import { ContactList } from '../components/ContactList/ContactList';
// import { FilterForm } from '../components/FilterForm/FilterForm';
// import { Wrapper } from '../components/App.styled';

// import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
// import { useEffect } from 'react';
import { WelcomeWrapper, Welcome } from './Home.styled';

export const Home = () => {
   return (
      <WelcomeWrapper>
         <Welcome>Hello!</Welcome>
         <Welcome>This is a PhoneBookApp</Welcome>
      </WelcomeWrapper>
   );
};
