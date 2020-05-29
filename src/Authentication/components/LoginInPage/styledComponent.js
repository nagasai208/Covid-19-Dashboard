import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const LoginPageBodyDiv = styled.div`
${tw`flex flex-col items-center justify-center min-h-screen `};
background-color:#f1f7ff;
width:100%`;


const LoginMainDiv = styled.form`
${tw`flex flex-col `};
width:536px;
height:687px;
border-radius:8px;
background-color: var(--white);
background-color:#ffffff;
padding-top:48px;
padding-left:108px`;


const Img = styled.img`
margin-right:100px`;

const Heading = styled.h1`
${tw`text-center`}
width: 214px;
margin-top:24px;
margin-bottom:10px;
margin-left:75px;
  height: 80px;
  font-family: Rubik;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: var(--dark-blue-grey);`

const ErrorMessage = styled.p`
  ${tw`text-red-600`};
  font-size:12px;`;

const UserNameHeading = styled.p`
  ${tw`text-gray-600 mb-1`};
  font-size:14px;`

const PasswordHeading = styled.p`
  ${tw`mt-5  text-gray-600 mb-1 `};
  font-size:14px;`

export {
  LoginPageBodyDiv, LoginMainDiv, Img, Heading, ErrorMessage, PasswordHeading, UserNameHeading
}