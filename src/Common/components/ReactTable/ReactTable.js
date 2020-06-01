import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import './ReactTableStyles.css';
class ReactTableData extends React.Component {
    constructor() {
        super();
    }
    render() {
        const { tableData } = this.props;
        return (
            <div className={'text-white text-center bg-gray-800 '}>
                <ReactTable
                    data={tableData}
                    showPagination={false}
                    defaultPageSize={tableData.length}
                    columns={[
                        {
                            columns: [
                                {
                                    Header: 'DistrictName',
                                    accessor: 'districtName',
                                    style: {
                                        padding: "10px"
                                    },
                                    minWidth: 200,


                                },
                                {
                                    Header: "Confirmed",
                                    accessor: "totalCases"

                                },
                                {
                                    Header: "Active",
                                    accessor: "activeCases"

                                },
                                {
                                    Header: "Recorved",
                                    accessor: "totalRecoveredCases"

                                },
                                {
                                    Header: "Deaths",
                                    accessor: "totalDeaths"
                                }
                            ]
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