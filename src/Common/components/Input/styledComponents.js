import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const InputTag = styled.input`
${tw``};
width:280px;
outline:none;
background-color:${props => props.error ? '' : '#fed7d7'}`

const InputTagDiv = styled.div`
${tw`flex `};
border:${props => props.error ? '1px solid #718096' : '1px solid red'};
border-radius:2px;
width:320px;
height:40px;
background-color:${props => props.error ? '' : '#fed7d7'}`;


const ErrorImg = styled.img`
${tw`flex justify-end`}`

export {
    InputTag, InputTagDiv, ErrorImg
}