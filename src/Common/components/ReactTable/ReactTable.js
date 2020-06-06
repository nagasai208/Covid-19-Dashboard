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
        const { tableData, name, nameType, active } = this.props;
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
                                    accessor: "totalCases"

                                },
                                {
                                    Header: "Active",
                                    accessor: `${active}`

                                },
                                {
                                    Header: "Recorved",
                                    accessor: "totalRecoveredCases"

                                },
                                {
                                    Header: "Deaths",
                                    accessor: "totalDeaths"
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