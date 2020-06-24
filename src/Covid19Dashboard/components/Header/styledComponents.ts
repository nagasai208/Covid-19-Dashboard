import styled from '@emotion/styled';
import tw from 'tailwind.macro';
type DataProps = {
    color:any
}


const HeadeMainDiv = styled.div`
${tw`flex justify-between items-center  w-full flex-wrap mt-5 mb-5 p-5`}`;

const StateName = styled.div`
${tw`text-white`}`;

const Date = styled.div`
${tw`flex bg-grey-900 mt-5`}`;

const DateHeading = styled.label`
${tw`text-white mr-2`}`;

const CasesButton = styled.div`
${tw`flex  self-end`}`;

const DateInputTag = styled.input`
${tw`bg-gray-800 text-white `}`;

const ButtonCumulative = styled.button`
${tw`text-white border border-white-800 rounded-full py-2 px-4 mr-1`};
background-color:${(props:DataProps) => props.color ? '#6f42c1' : ''};
:hover {
    background-color:#6f42c1;
}
`

const ButtonDaily = styled.button`
${tw`text-white border border-white-800 rounded-full py-2 px-4 `};
background-color:${props => props.color ? '#6f42c1' : ''};
:hover {
    background-color:#6f42c1;
}
`


export {
    HeadeMainDiv, StateName, Date, DateHeading, CasesButton, DateInputTag, ButtonCumulative, ButtonDaily
}