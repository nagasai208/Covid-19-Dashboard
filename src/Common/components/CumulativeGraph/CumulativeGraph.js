import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { observable } from "mobx";
import { observer } from "mobx-react";
@observer
export default class CumulativeGraph extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/1p40zzfe/';



    render() {
        const { cumulativeReport } = this.props;
        return (
            <div>
                <LineChart
                    width={400}
                    height={300}
                    data={cumulativeReport.daily_cumulative}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" name='confirmed' dataKey="total_cases" stroke="rgb(224, 49, 49)" activeDot={{ r: 8 }} />
                    <Line type="monotone" name='active' dataKey="total_deaths" stroke="rgb(25, 113, 194)" />
                    <Line type="monotone" name='recovered' dataKey="total_recovered_cases" stroke="rgb(47, 158, 68)" activeDot={{ r: 8 }} />
                    <Line type="monotone" name='deaths' dataKey="active_cases" stroke="rgb(230, 119, 0)" />
                </LineChart>
            </div>
        );
    }
}



