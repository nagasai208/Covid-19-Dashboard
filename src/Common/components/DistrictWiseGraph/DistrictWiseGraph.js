import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import withScreenSizeDetectors from '../../hoc/withScreenSizeDetectors/withScreenSizeDetectors';
import { observer } from "mobx-react";
import { observable, toJS } from 'mobx';

@observer
class DistrictWiseGraph extends PureComponent {
    @observable width
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hbqxcu35/';
    componentDidMount() {
        this.displayType();
    }
    displayType = () => {
        if (this.props.isMobile()) {
            this.width = 300;
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
        const { covid19StateStore, data } = this.props;
        return (

            <div>
                <LineChart
                    width={this.width}
                    height={200}
                    data={toJS(data.daily_cumulative)}
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line connectNulls type="monotone" name={data.district_name} dataKey="total_cases" stroke="#8884d8" fill="#8884d8" />
                </LineChart>
            </div>
                
        );
    }
}
export default withScreenSizeDetectors(DistrictWiseGraph);