import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import withScreenSizeDetectors from '../../hoc/withScreenSizeDetectors/withScreenSizeDetectors';
import { observer } from "mobx-react";
import { observable } from 'mobx';
@observer
class CumulativeDistrictGraph extends PureComponent {
    @observable width;
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/1p40zzfe/';
    componentDidMount() {
        this.displayType();
    }
    displayType = () => {
        if (this.props.isMobile()) {
            this.width = 250;
        }
        else if (this.props.isTablet()) {
            this.width = 400;
        }
        else if (this.props.isDesktop()) {
            this.width = 500;
        }
    }
    render() {
        window.onresize = this.displayType;
        const { totalDistictsData } = this.props;
        return (
            <div>
                <LineChart
                    width={this.width}
                    height={300}
                    data={totalDistictsData}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
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

export default withScreenSizeDetectors(CumulativeDistrictGraph);
