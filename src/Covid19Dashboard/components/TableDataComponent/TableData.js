import React, { Component } from 'react'
import { observer } from "mobx-react"
import ReactTableData from "../../../Common/components/ReactTable";
import { TableMainDiv } from './styledComponents';
@observer
class TableData extends Component {
   
    render() {
        const { totalDistictsData, totalMandals, regionType } = this.props.covid19StateStore;
        return (
            <TableMainDiv>
                {regionType === 'mandals' ? <ReactTableData tableData={totalMandals} name='mandal_name' nameType="Mandal Name" />:
                   
                    <ReactTableData tableData={totalDistictsData} name= 'district_name' nameType="District Name"/> 
                }
                
            </TableMainDiv>
        )
    }
}

export { TableData }














