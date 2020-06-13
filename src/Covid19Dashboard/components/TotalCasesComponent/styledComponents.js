import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const TotalCasesMainDiv = styled.div`
${tw` flex m-2 justify-center flex-wrap  `};width:100%`

const ConfirmedCases = styled.div`
${tw`w-40  text-white  h-24 flex flex-col items-center justify-center `};
background-color:#e03131;
:hover{
    cursor:pointer;
    border:10px solid white;
}`;

const ActiveCases = styled.div`
${tw`w-40  text-white  h-24 flex flex-col items-center justify-center `};
background-color:#1971c2;
:hover{
    cursor:pointer;
    border:10px solid white;
}`;

const RecoveredCases = styled.div`
${tw`w-40  text-white  h-24 flex flex-col items-center justify-center `};
background-color:#2f9e44;
:hover{
    cursor:pointer;
    border:10px solid white;
}`;

const Deaths = styled.div`
${tw`w-40  text-white  h-24 flex flex-col items-center justify-center `};
background-color:#e67700;
:hover{
    cursor:pointer;
    border:10px solid white;
}`;

const CasesCount = styled.p`
${tw`text-xl text-white`}`

export {
    TotalCasesMainDiv, CasesCount,ConfirmedCases,ActiveCases,RecoveredCases,Deaths
}