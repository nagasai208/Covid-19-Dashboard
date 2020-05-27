import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const DashboardMainDiv = styled.div`
${tw`bg-gray-900 min-h-screen`}`;


const CasesDiv = styled.div`
${tw`flex flex-col justify-around  mt-5`}`

const OnclickCasesDiv = styled.a`
${tw`flex  justify-around  mt-5`}`


const MapAndGarphsDiv = styled.div`
${tw`flex flex-col`};
width:50%;`;

const OnlyGraphs = styled.div`
${tw`flex flex-col justify-center items-center`};
width:50%`;


const MapsAadGraphTotalDiv = styled.div`
${tw`flex w-full`};`;


const FooterData = styled.div`
${tw`flex border border-white-800`}`;

const TableDiv = styled.div`
${tw`m-5  `};
width:45%;`

const PositiveGraphsDiv = styled.div`
${tw`m-2 flex justify-center`};
width:45%;`


export {
    DashboardMainDiv, CasesDiv, MapAndGarphsDiv, OnclickCasesDiv, MapsAadGraphTotalDiv, OnlyGraphs, FooterData, TableDiv, PositiveGraphsDiv
}