import styled from '@emotion/styled';

export const Bar = styled.div`
   display: flex;
   min-height: 100px;
   padding: 30px;
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
   box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;

   &:hover {
      background-color: blue;
   }
`;
