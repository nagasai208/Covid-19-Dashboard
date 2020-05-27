import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class TableData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [{
                headerName: "DistrictName", field: "make", sortable: true
            }, {
                headerName: "Confirmed", field: "make", sortable: true
            }, {
                headerName: "Active", field: "model", sortable: true
            }, {
                headerName: "Recovered", field: "price", sortable: true
            }, {
                headerName: "Deaths", field: "price", sortable: true
            }],
            rowData: [{
                make: "Toyota", model: "Celica", price: 35000
            }, {
                make: "Ford", model: "Mondeo", price: 32000
            }, {
                make: "Porsche", model: "Boxter", price: 72000
            }, {
                make: "Porsche", model: "Boxter", price: 72000
                }, {
                    make: "Toyota", model: "Celica", price: 35000
                }, {
                    make: "Ford", model: "Mondeo", price: 32000
                }, {
                    make: "Porsche", model: "Boxter", price: 72000
                }, {
                    make: "Porsche", model: "Boxter", price: 72000
                }]
        }
    }

    render() {
        return (
            <div
                className="ag-theme-alpine"
                style={{
                    height: '550px',
                    width: '100%'
                }}
            >
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}>
                </AgGridReact>
            </div>
        );
    }
}

export { TableData }
