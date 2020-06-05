import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import { observer } from "mobx-react";
import { observable, toJS } from 'mobx';
import withScreenSizeDetectors from '../../hoc/withScreenSizeDetectors/withScreenSizeDetectors';
@observer
class DialyReportGraphs extends PureComponent {
    @observable width
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
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
        const { dailyReport, casesType, color } = this.props;
        return (
            <BarChart
                width={this.width}
                height={200}
                data={dailyReport}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={casesType} fill={color} />
            </BarChart>
        );
    }
}

export default withScreenSizeDetectors(DialyReportGraphs);
