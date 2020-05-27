import React from 'react';
import Covid19DashBoard from "../../components/Covid19DashBoard";
import { getAccessToken } from "../../../Authentication/utils/StorageUtils";
import { Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react";
import { observable, action } from "mobx";
import { clearUserSession } from "../../../Authentication/utils/StorageUtils";
@observer
class DashBoardRoute extends React.Component {
    @observable token = false;
    @observable dailyDataGraphs = false;
    @observable cumulativeGraphs = true;
    constructor(props) {
        super(props);
        this.token = getAccessToken();
    }
    onClickSignOut = () => {
        this.token = clearUserSession();
    }
    @action.bound
    onClickDaily() {
        this.dailyDataGraphs = true;
        this.cumulativeGraphs = false;
    }
    @action.bound
    onClickCumulative() {
        this.cumulativeGraphs = true;
        this.dailyDataGraphs = false;
    }
    render() {
        const { history } = this.props;
        if (this.token === undefined) {
            history.push("/login")
        }
        return (
            <Covid19DashBoard onClickSignOut={this.onClickSignOut} onClickDaily={this.onClickDaily}
                dailyDataGraphs={this.dailyDataGraphs} onClickCumulative={this.onClickCumulative} cumulativeGraphs = {this.cumulativeGraphs} />
        )
    }
} 

export default withRouter(DashBoardRoute);