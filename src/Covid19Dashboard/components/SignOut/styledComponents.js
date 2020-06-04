import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const ButtonDiv = styled.div`
${tw`flex justify-end  bg-gray-700 `}`;
const SignOutButtonMainDiv = styled.div`
position:sticky;
top:0;
width:100%;
z-index:10`;


export {
    ButtonDiv, SignOutButtonMainDiv
}