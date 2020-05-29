import React, { PureComponent } from 'react';
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';

export default class ConfirmedCasesGraph extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/shjsn5su/';

    render() {
        const { totalDistictsData } = this.props;
        return (
            <ComposedChart
                layout="vertical"
                width={600}
                height={600}
                data={totalDistictsData}
                margin={{
                    top: 20, right: 0, bottom: 20, left: 80,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="activeCases" />
                <YAxis dataKey="districtName" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="activeCases" barSize={20} fill="#ff6347" />
            </ComposedChart>
        );
    }
}

