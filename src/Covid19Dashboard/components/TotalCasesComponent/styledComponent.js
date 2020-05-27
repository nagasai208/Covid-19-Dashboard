import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const TotalCasesMainDiv = styled.div`
${tw` flex m-2 flex-wrap`}`

const ConfirmedCases = styled.div`
${tw`w-1/4  text-white text-center h-16 bg-red-600 flex flex-col justify-center items-center `}`;

const ActiveCases = styled.div`
${tw`w-1/4  text-white text-center h-16 bg-orange-600 flex flex-col justify-center items-center`}`;

const RecoveredCases = styled.div`
${tw`w-1/4  text-white text-center h-16 bg-green-600 flex flex-col justify-center items-center`}`;

const Deaths = styled.div`
${tw`w-1/4  text-white text-center h-16 bg-blue-600 flex flex-col justify-center items-center`}`;

const CasesCount = styled.p`
${tw`text-xl text-white`}`

export {
    TotalCasesMainDiv, CasesCount,ConfirmedCases,ActiveCases,RecoveredCases,Deaths
}