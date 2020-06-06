import React, { Component } from 'react'
import { observer } from "mobx-react"
import ReactTableData from "../../../Common/components/ReactTable";
import { TableMainDiv } from './styledComponents';
@observer
class TableData extends Component {
    typeOfCasses
    render() {
        const { totalDistictsData, totalMandals, regionType } = this.props.covid19StateStore;
        const { dailyDataGraphs } = this.props;
        if (dailyDataGraphs) {
            this.typeOfCasses ='totalCases'
        }
        else {
            this.typeOfCasses = 'activeCases'
        }
        return (
            <TableMainDiv>
                {regionType === 'mandals' ? <ReactTableData tableData={totalMandals} name='mandalName' nameType="Mandal Name"
                    active={this.typeOfCasses}/> :
                   
                    <ReactTableData tableData={totalDistictsData} name='districtName'
                        nameType="District Name" active={this.typeOfCasses} /> 
                }
                
            </TableMainDiv>
        )
    }
}

export { TableData }














