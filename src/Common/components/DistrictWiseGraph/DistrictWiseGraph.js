import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
export default class DistrictWiseGraph extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hbqxcu35/';

    render() {
        const { totalDistictsData } = this.props;
        console.log(totalDistictsData)
        return (
            <div>
                <LineChart
                    width={500}
                    height={200}
                    data={totalDistictsData}
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="totalRecoveredCases" />
                    <YAxis  />
                    <Tooltip />
                    <Line connectNulls type="monotone" dataKey="totalRecoveredCases" stroke="#8884d8" fill="#8884d8" />
                </LineChart>
            </div>
        );
    }
}

