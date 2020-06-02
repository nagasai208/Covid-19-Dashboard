import React, { PureComponent } from 'react';
import withScreenSizeDetectors from '../../hoc/withScreenSizeDetectors/withScreenSizeDetectors';
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';
import { observer } from "mobx-react";
import { observable } from 'mobx';
@observer
class ConfirmedCasesGraph extends PureComponent {
    @observable width;
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/shjsn5su/';
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
        const { positiveCasesGraph } = this.props;
        return (
            <ComposedChart
                layout="vertical"
                width={this.width}
                height={500}
                data={positiveCasesGraph}
                margin={{
                    top: 20, right: 0, bottom: 20, left:60,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="districtName" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="activeCases" name="positive" barSize={20} fill="#f56565" />
            </ComposedChart>
        );
    }
}

export default withScreenSizeDetectors(ConfirmedCasesGraph);

