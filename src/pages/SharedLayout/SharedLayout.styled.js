import styled from '@emotion/styled';
import { NavLink as Link } from 'react-router-dom';

export const Bar = styled.div`
   display: flex;
   align-items: center;

   min-height: 100px;
   padding: 30px;
`;

export const NavLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
height: 20px;
   width: 169px;
   font-size: 30px;
   border-radius: 10px;
   background-color: white;
   text-decoration: none;
   margin-left: 40px;
   color: black;

   padding: 30px;
   border: 1px solid black;
  
   box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

   &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
         rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;
