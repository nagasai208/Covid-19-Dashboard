import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { observer } from "mobx-react";
import { toJS } from "mobx";
import cumulativeData from '../../../Covid19Dashboard/fixtures/StateWideAllDistrictsDailyCumulativeReport.json'
@observer
export default class CumulativeAllDistrictGraph extends PureComponent {
    // componentDidMount() {
    //     const { cumulativeReport } = this.props;
    //     const dates = 10;
    //     this.districtsNames = [];
    //     this.values = []
    //     cumulativeReport.districts.map(item => {
    //         this.districtsNames.push(item.district_name)
    //     })
    //     const dataObj = {
    //         date: null,

    //     }
    //     this.districtsNames.map(name => {
    //         dataObj[name] = null;
    //     })
    //     for (let i = 0; i < 10; i++) {
    //         const graphData = { ...dataObj }
    //         graphData['date'] = cumulativeReport[0].daily_cumulative[i].date;
    //         cumulativeReport.map(eachObj => {
    //             const confirmedCasess = eachObj.daily_cumulative[i].confirmed_casess;
    //             graphData[eachObj.name = confirmedCasess]
    //         })
    //         this.values.push(graphData);

    //     }
    //     const result = {
            
    //     }
    // }
    render() {
        const { cumulativeReport } = this.props;
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
                        cumulativeReport.districts !== undefined &&
                        cumulativeReport.districts.map(item => {
                            return < Line type="monotone" name={item.district_name} dataKey={item.district_name} stroke="#ff6366" />

                        })
                    }
                </LineChart>
            </div>
        );
    }
}
