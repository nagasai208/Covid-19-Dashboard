import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import './ReactTableStyles.css';
import { observer } from "mobx-react";
@observer
class ReactTableData extends React.Component {
    constructor() {
        super();
    }
    render() {
        const { tableData, name, nameType } = this.props;
        return (
            <div className={'text-white text-center bg-gray-800 '}>
                <ReactTable
                    data={tableData}
                    showPagination={false}
                    defaultPageSize={10}
                    columns={[
                        {
                            columns: [
                                {
                                    Header: `${nameType}`,
                                    accessor: `${name}`,
                                    style: {
                                        padding: "10px"
                                    },
                                    minWidth: 200,


                                },
                                {
                                    Header: "Confirmed",
                                    accessor: "total_cases"

                                },
                                {
                                    Header: "Active",
                                    accessor: "active_cases"

                                },
                                {
                                    Header: "Recorved",
                                    accessor: "total_recovered_cases"

                                },
                                {
                                    Header: "Deaths",
                                    accessor: "total_deaths"
                                }
                            ],

                        },

                    ]}
                    defaultSorted={[
                        {
                            id: "totalCases",
                            desc: true,
                        }
                    ]}
                />

            </div>
        );
    }
}



export { ReactTableData }