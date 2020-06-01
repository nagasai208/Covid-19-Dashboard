import React, { Component } from 'react'
import { observer } from "mobx-react"
import ReactTableData from "../../../Common/components/ReactTable";
import { TableMainDiv } from './styledComponents';
@observer
class TableData extends Component {
   
    render() {
        const { totalDistictsData } = this.props.covid19StateStore;
        return (
            <TableMainDiv>
                <ReactTableData tableData={totalDistictsData}  />
            </TableMainDiv>
        )
    }
}

export { TableData }














