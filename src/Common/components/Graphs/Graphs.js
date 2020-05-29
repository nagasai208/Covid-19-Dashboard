import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default class Graphs extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    render() {
        const { cumulativeDistrictData, casesType } = this.props;
        console.log(casesType, 'hhh')
        return (
            <BarChart
                width={400}
                height={200}
                data={cumulativeDistrictData.kurnool}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={casesType} fill="#8884d8" />
            </BarChart>
        );
    }
}
