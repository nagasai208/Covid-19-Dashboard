import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const DistrictWiseZonalMainDiv = styled.div`
${tw`flex  flex-wrap justify-center`};`;

const DistrictWiseZonalDiv = styled.div`
${tw`text-white m-5 text-center bg-gray-800 p-5`}`;

const DistrictWiseMainGraph = styled.div`
${tw`flex flex-wrap justify-around`}`


export {
    DistrictWiseZonalDiv, DistrictWiseZonalMainDiv, DistrictWiseMainGraph
}