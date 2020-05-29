import React from 'react';
import Covid19DashBoard from "../../components/Covid19DashBoard";
import { getAccessToken } from "../../../Authentication/utils/StorageUtils";
import { Redirect, withRouter } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { observable, action, toJS } from "mobx";
import { clearUserSession } from "../../../Authentication/utils/StorageUtils";
@inject('covid19StateStore')
@observer
class DashBoardRoute extends React.Component {
    @observable token = false;
    @observable dailyDataGraphs = false;
    @observable cumulativeGraphs = true;
    @observable districtAnalysis = true;
    constructor(props) {
        super(props);
        this.token = getAccessToken();
    }
    async componentDidMount() {
        await this.doNetworkCalls()
    }
    doNetworkCalls = () => {
        this.props.covid19StateStore.stateCasesApi()
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

    @action.bound
    onClickZOnal() {
        this.districtAnalysis = true;
    }
    @action.bound
    onClickZOnalDashBoard() {
        this.districtAnalysis = false;
    }
    render() {
        const { stateTotalData } = this.props.covid19StateStore;
        const { covid19StateStore } = this.props;
        const { history } = this.props;
        if (this.token === undefined) {
            history.push("/login")
        }
        return (
            <Covid19DashBoard key={Math.random()} onClickSignOut={this.onClickSignOut} onClickDaily={this.onClickDaily}
                dailyDataGraphs={this.dailyDataGraphs} onClickCumulative={this.onClickCumulative}
                cumulativeGraphs={this.cumulativeGraphs} onClickZOnalDashBoard={this.onClickZOnalDashBoard}
                onClickZOnal={this.onClickZOnal} districtAnalysis={this.districtAnalysis} stateTotalData={stateTotalData}
                covid19StateStore={covid19StateStore} doNetworkCalls={this.doNetworkCalls}/>
        )
    }
}

export default withRouter(DashBoardRoute);