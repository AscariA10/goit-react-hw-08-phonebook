import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'pages/SharedLayout';
import { Home } from 'pages/Home';
import { Register } from 'pages/Register';
import { LogIn } from 'pages/Login';

export const App = () => {
   return (
      <Routes>
         <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<LogIn />} />
         </Route>
      </Routes>
   );
};
