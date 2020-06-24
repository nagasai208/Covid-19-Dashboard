import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { observer } from "mobx-react";
import { toJS } from "mobx";
import cumulativeData from '../../../Covid19Dashboard/fixtures/StateWideAllDistrictsDailyCumulativeReport.json';
type cumulativeReportProps ={

}
@observer
export default class CumulativeAllDistrictGraph extends PureComponent<cumulativeReportProps> {
    render() {
        //const { cumulativeReport } = this.props;
        return (
            <div>
                <LineChart
                    width={400}
                    height={300}
                    data={cumulativeData.Each_Day_cases}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {
                       // cumulativeData.districts !== undefined &&
                        cumulativeData.district_name.map(item => {
                            return < Line type="monotone" name={item} dataKey={item} stroke="#ff6366" />

                        })
                    }
                </LineChart>
            </div>
        );
    }
}
