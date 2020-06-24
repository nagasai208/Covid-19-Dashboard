import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { observable } from "mobx";
import { observer } from "mobx-react";
type CumulativeReportProps = {
    cumulativeReport:{dailyCumulative:Array<object>}
}
@observer
export default class CumulativeGraph extends PureComponent <CumulativeReportProps>{
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/1p40zzfe/';



    render() {
        const { cumulativeReport } = this.props;
        return (
            <div>
                <LineChart
                    width={400}
                    height={300}
                    data={cumulativeReport.dailyCumulative}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" name='confirmed' dataKey="totalCases" stroke="rgb(224, 49, 49)" activeDot={{ r: 8 }} />
                    <Line type="monotone" name='active' dataKey="totalDeaths" stroke="rgb(25, 113, 194)" />
                    <Line type="monotone" name='recovered' dataKey="totalRecoveredCases" stroke="rgb(47, 158, 68)" activeDot={{ r: 8 }} />
                    <Line type="monotone" name='deaths' dataKey="activeCases" stroke="rgb(230, 119, 0)" />
                </LineChart>
            </div>
        );
    }
}



