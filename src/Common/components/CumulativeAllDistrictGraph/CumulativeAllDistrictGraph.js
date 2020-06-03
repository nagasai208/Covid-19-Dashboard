import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { observer } from "mobx-react";
@observer
export default class CumulativeAllDistrictGraph extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/1p40zzfe/';



    render() {
        const { cumulativeReport } = this.props;
        return (
            <div>
                <LineChart
                    width={400}
                    height={300}
                    data={cumulativeReport.kurnool}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="totalCases" stroke="#ff6347" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="totalDeaths" stroke="Orange" />
                    <Line type="monotone" dataKey="totalRecoveredCases" stroke="MediumSeaGreen" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="activeCases" stroke="#82ca9d" />
                </LineChart>
            </div>
        );
    }
}
