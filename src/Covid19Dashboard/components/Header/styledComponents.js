import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const HeadeMainDiv = styled.div`
${tw`flex justify-between items-center m-5`}`;

const StateName = styled.div`
${tw`text-white`}`;

const Date = styled.div`
${tw`flex bg-grey-900`}`;

const DateHeading = styled.label`
${tw`text-white`}`;

const CasesButton = styled.div`
${tw`flex`}`


export {
    HeadeMainDiv, StateName, Date, DateHeading, CasesButton
}