
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const DashboardMainDiv = styled.div`
${tw`bg-gray-900 min-h-screen min-w-screen`}`;


const CasesDiv = styled.div`
${tw`flex flex-col justify-around mt-5`};
width:100%`

const OnclickCasesDiv = styled.div`
${tw`flex  justify-around mt-5 text-white flex-wrap  h-10`};
width:100%`



const MapAndGarphsDiv = styled.div`
${tw`flex flex-col flex-wrap `};width:650px;
;`

const OnlyGraphs = styled.div`
${tw`flex flex-col justify-center items-center justify-center`};
width:45%`;


const MapsAadGraphTotalDiv = styled.div`
${tw`flex w-full flex-wrap justify-center`}`;


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
${tw`w-full flex flex-wrap`}
`;
const HomePageDataZonalDashboard = styled.div``;

const  OnClickCOnfirmed = styled.p`
${tw`text-lg `}
color:${props => props.color === 'confirmed' ? '#e03131' : 'white'};
cursor:pointer;
border-bottom:${props => props.color === 'confirmed' ? '2px solid #e03131' : ''};
:hover{
    color:#e03131;
    border-bottom:2px solid #e03131;
}
`

const OnClickActive = styled.p`
${tw`text-lg `};
color:${props => props.color === 'active' ? '#1971c2' : 'white'};
border-bottom:${props => props.color === 'active' ? '2px solid #1971c2' : ''};
cursor:pointer;
:hover{
    color:#1971c2;
    border-bottom:2px solid #1971c2;
}`;


const OnClickDeaths = styled.p`
${tw`text-lg`}
color:${props => props.color === 'deaths' ? '#e67700' : 'white'};
cursor:pointer;
border-bottom:${props => props.color === 'deaths' ? '2px solid #e67700' : ''};
:hover{
    color:#e67700;
    border-bottom:2px solid #e67700;
}`;

const OnClickRecovered = styled.p`
${tw`text-lg`}
color:${props => props.color === 'recovered' ? '#2f9e44' : 'white'};
cursor:pointer;
border-bottom:${props => props.color === 'recovered' ? '2px solid #2f9e44' : ''};
:hover{
    color:#2f9e44;
    border-bottom:2px solid #2f9e44`;


const MapMainDiv = styled.div`
${tw`mt-5 `};
width:100%;
`;

export {
    DashboardMainDiv, CasesDiv, MapAndGarphsDiv, OnclickCasesDiv, MapsAadGraphTotalDiv, OnlyGraphs,
    FooterData, TableDiv, PositiveGraphsDiv, DistrictWiseZonalMainDiv, DistrictWiseZonalDiv,
    ZonalDashBoard, TotalDataDiv, HomePageDataZonalDashboard,OnClickActive,OnClickCOnfirmed,OnClickRecovered,OnClickDeaths
    , MapMainDiv}