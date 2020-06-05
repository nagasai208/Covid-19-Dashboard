import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const MapMainDiv = styled.div`
${tw` flex flex-wrap`};`


const DistrictButton = styled.button`
${tw` h-10 border border-white-800 text-white px-5 m-5 w-40 rounded-md `}`

export {
    MapMainDiv, DistrictButton
}