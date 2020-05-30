import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Button = styled.button`
${tw`rounded sm:rounded-t md:rounded-b-lg lg:rounded-none xl:rounded-r border border-black-800 pl-1 pr-1 text-white mt-2 m-2 p-2 `};
font-size:14px;
:hover{

    background-color:grey;
    color:white;
}`;

export {
    Button
}