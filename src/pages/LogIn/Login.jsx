import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authentification/operations';

import { Form, Field, FieldLabel, FormButton } from './LogIn.styled';

export const LogIn = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const dispatch = useDispatch();

   function onChangeFunction(event) {
      switch (event.target.name) {
         case 'email':
            setEmail(event.currentTarget.value);
            break;
         case 'password':
            setPassword(event.currentTarget.value);
            break;
         default:
            return;
      }
   }

   function onFormSubmit(event) {
      event.preventDefault();
      dispatch(logIn({ email: email, password: password }));
      setEmail('');
      setPassword('');
   }

   return (
      <Formik>
         <Form onSubmit={onFormSubmit}>
            <h2>Log In Form</h2>
            <FieldLabel>
               Email
               <Field
                  onChange={onChangeFunction}
                  value={email}
                  type="email"
                  name="email"
                  placeholder="Email"
               />
            </FieldLabel>

            <FieldLabel>
               Password
               <Field
                  onChange={onChangeFunction}
                  value={password}
                  type="password"
                  name="password"
                  placeholder="Password"
               />
            </FieldLabel>

            <FormButton type="submit">Submit</FormButton>
         </Form>
      </Formik>
   );
};
