// import React, { Component } from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// class TableData extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             columnDefs: [{
//                 headerName: "DistrictName", field: "make", sortable: true
//             }, {
//                 headerName: "Confirmed", field: "price", sortable: true
//             }, {
//                 headerName: "Active", field: "price", sortable: true
//             }, {
//                 headerName: "Recovered", field: "price", sortable: true
//             }, {
//                 headerName: "Deaths", field: "price", sortable: true
//             }],
//             rowData:null
//         }
//     }

//     componentDidMount() {
//         console.log()
//     }

//     render() {
//         return (
//             <div
//                 className="ag-theme-alpine"
//                 style={{
//                     height: '550px',
//                     width: '100%'
//                 }}
//             >
//                 <AgGridReact
//                     columnDefs={this.state.columnDefs}
//                     rowData={this.state.rowData}>
//                 </AgGridReact>
//             </div>
//         );
//     }
// }

// export { TableData }
import React, { Component } from 'react'
import { observer } from "mobx-react"
import { action, toJS } from "mobx"
import strings from '../../i18n/strings.json';
import { TableTag, TableMainData, TabledRow, TabledHeading, TabledData } from './styledComponent';
@observer
class TableData extends Component {
    @action.bound
    SortedData(event) {
        const { covid19StateStore } = this.props;
        covid19StateStore.sortedData()
        }
    @action.bound
    renderList(item,index) {
        return (
            <TabledRow key={Math.random()} index={index}>
                <TabledData >{item.districtName}</TabledData>
                <TabledData>{item.totalCases}</TabledData>
                <TabledData>{item.activeCases}</TabledData>
                <TabledData>{item.totalRecoveredCases}</TabledData>
                <TabledData>{item.totalDeaths}</TabledData>
            </TabledRow>
        )
    }
    render() {
        const { totalDistictsData } = this.props.covid19StateStore;
        return (
            <TableMainData>
                <TableTag>
                    <TabledRow>
                        <TabledHeading id="districtName" onClick={this.SortedData}>{strings.districtName}</TabledHeading>
                        <TabledHeading id='2' onClick={this.SortedData}>{strings.confirmed}</TabledHeading>
                        <TabledHeading id='3' onClick={this.SortedData}>{strings.active}</TabledHeading>
                        <TabledHeading id='4' onClick={this.SortedData}>{strings.recovered}</TabledHeading>
                        <TabledHeading id='5' onClick={this.SortedData}>{strings.deaths}</TabledHeading>
                    </TabledRow>

                    {
                        totalDistictsData !== undefined &&
                        totalDistictsData.map((item,index) => {
                            return this.renderList(item,index)
                        })
                    }
                </TableTag>
            </TableMainData>
        )
    }
}

export { TableData }
























