import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const TableTag = styled.table`
${tw`bg-gray-800`}
border-collapse: collapse;`

const TabledRow = styled.tr`
${tw`w-full`}
background-color:${props => props.index % 2 === 0 ? '#1a202c' :'#2d3748'}
`

const TabledHeading = styled.th`
${tw`p-2 w-48`};
cursor:pointer;
`

const TabledData = styled.td`
${tw`p-2`}
`

const TableMainData = styled.div`
${tw`text-white p-5 text-center  `}`

export {
    TableTag, TableMainData, TabledRow, TabledHeading, TabledData
}