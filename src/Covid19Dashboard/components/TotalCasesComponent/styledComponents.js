import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const TotalCasesMainDiv = styled.div`
${tw` flex m-2 justify-center flex-wrap w-full`}`

const ConfirmedCases = styled.div`
${tw`w-40  text-white text-center h-16 bg-red-600   `}`;

const ActiveCases = styled.div`
${tw`w-40  text-white text-center h-16 bg-orange-600  `}`;

const RecoveredCases = styled.div`
${tw`w-40  text-white text-center h-16 bg-green-600  `}`;

const Deaths = styled.div`
${tw`w-40  text-white text-center h-16 bg-blue-600   `}`;

const CasesCount = styled.p`
${tw`text-xl text-white`}`

export {
    TotalCasesMainDiv, CasesCount,ConfirmedCases,ActiveCases,RecoveredCases,Deaths
}