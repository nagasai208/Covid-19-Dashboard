import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const DashboardMainDiv = styled.div`
${tw`bg-gray-900 min-h-screen`}`;


const CasesDiv = styled.div`
${tw`flex flex-col justify-around  mt-5`}`

const OnclickCasesDiv = styled.div`
${tw`flex  justify-around ml-48 mt-5 w-1/2 flex-wrap   `}`
const MapAndGarphsDiv = styled.div`
${tw`flex flex-col flex-wrap`};
;`;

const OnlyGraphs = styled.div`
${tw`flex flex-col justify-center items-center`};
width:45%`;


const MapsAadGraphTotalDiv = styled.div`
${tw`flex w-full flex-wrap  justify-center`};`;


const FooterData = styled.div`
${tw`flex justify-center  flex-wrap`}`;

const TableDiv = styled.div`
${tw`m-5 flex justify-center `};
width:45%;`

const PositiveGraphsDiv = styled.div`
${tw`mt-5 flex justify-center`};
width:50%;`

const DistrictWiseZonalMainDiv = styled.div`
${tw`flex  flex-wrap justify-center`}`;

const DistrictWiseZonalDiv = styled.div`
${tw`text-white m-5 text-center`}`

const ZonalDashBoard = styled.div`
`
const TotalDataDiv = styled.div`
`;
const HomePageDataZonalDashboard = styled.div``;


export {
    DashboardMainDiv, CasesDiv, MapAndGarphsDiv, OnclickCasesDiv, MapsAadGraphTotalDiv, OnlyGraphs,
    FooterData, TableDiv, PositiveGraphsDiv, DistrictWiseZonalMainDiv, DistrictWiseZonalDiv, ZonalDashBoard, TotalDataDiv, HomePageDataZonalDashboard
}