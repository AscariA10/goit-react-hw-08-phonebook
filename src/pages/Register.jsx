import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from 'redux/authentification/operations';

export const Register = () => {
   const [email, setEmail] = useState('');
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');

   const dispatch = useDispatch();

   function onChangeFunction(event) {
      switch (event.target.name) {
         case 'email':
            setEmail(event.currentTarget.value);
            break;
         case 'name':
            setName(event.currentTarget.value);
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
      dispatch(
         signUpUser({
            email: email,
            name: name,
            password: password,
         })
      );
      setEmail('');
      setName('');
      setPassword('');
   }

   return (
      <Formik>
         <Form onSubmit={onFormSubmit}>
            <h2>Register Form</h2>
            <p>Email</p>
            <Field
               onChange={onChangeFunction}
               value={email}
               type="email"
               name="email"
               placeholder="Email"
            />
            <p>Name</p>
            <Field
               onChange={onChangeFunction}
               value={name}
               type="text"
               name="name"
               placeholder="Name"
            />
            <p>Password</p>
            <Field
               onChange={onChangeFunction}
               value={password}
               type="password"
               name="password"
               placeholder="Password"
            />
            <button type="submit">Submit</button>
         </Form>
      </Formik>
   );
};
