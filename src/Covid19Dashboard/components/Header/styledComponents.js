import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const HeadeMainDiv = styled.div`
${tw`flex justify-between items-center  w-full flex-wrap mt-5 mb-5 `}`;

const StateName = styled.div`
${tw`text-white`}`;

const Date = styled.div`
${tw`flex bg-grey-900 mt-5`}`;

const DateHeading = styled.label`
${tw`text-white`}`;

const CasesButton = styled.div`
${tw`flex  self-end`}`


export {
    HeadeMainDiv, StateName, Date, DateHeading, CasesButton
}