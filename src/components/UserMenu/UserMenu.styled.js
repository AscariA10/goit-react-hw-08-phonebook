import styled from '@emotion/styled';

export const UserMenuWrapper = styled.div`
   margin-left: auto;
   display: flex;
`;

export const UserMail = styled.p`
   display: block;
   margin-left: auto;
   margin-right: 50px;
   font-size: 30px;
`;

export const LogOutButton = styled.button`
   display: block;
   width: 200px;
   height: 80px;
   font-size: 30px;
   border-radius: 10px;
   background-color: white;
   box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

   &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
         rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
   }
`;
