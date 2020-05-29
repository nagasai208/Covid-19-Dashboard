import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { observable } from "mobx";

export default class CumulativeGraph extends PureComponent {
    @observable data=[]
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/1p40zzfe/';

    state = {
        opacity: {
            uv: 1,
            pv: 1,
            xv: 1,
            zv: 1,
        },
    };

    handleMouseEnter = (o) => {
        const { dataKey } = o;
        const { opacity } = this.state;

        this.setState({
            opacity: { ...opacity, [dataKey]: 0.5 },
        });
    }

    handleMouseLeave = (o) => {
        const { dataKey } = o;
        const { opacity } = this.state;

        this.setState({
            opacity: { ...opacity, [dataKey]: 1 },
        });
    }

    render() {
        const { cumulativeDistrictData } = this.props;
        const { opacity } = this.state;

        return (
            <div>
                <LineChart
                    width={400}
                    height={300}
                    data={cumulativeDistrictData.kurnool}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis  />
                    <Tooltip />
                    <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
                    <Line type="monotone" dataKey="totalCases" strokeOpacity={opacity.pv} stroke="#ff6347" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="totalDeaths" strokeOpacity={opacity.uv} stroke="Orange" />
                    <Line type="monotone" dataKey="totalRecoveredCases" strokeOpacity={opacity.pv} stroke="MediumSeaGreen" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="activeCases" strokeOpacity={opacity.uv} stroke="#82ca9d" />
                </LineChart>
            </div>
        );
    }
}
