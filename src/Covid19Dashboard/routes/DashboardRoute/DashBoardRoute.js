import React from 'react';
import { observer, inject } from "mobx-react";
import { observable, action, toJS } from "mobx";
import Covid19DashBoard from "../../components/Covid19DashBoard";
import { ProtectedRoute } from "../../../Common/routes/ProtectedRoute/ProtectedRoute";
@inject('covid19StateStore','authenticationStore')
@observer
class DashBoardRoute extends React.Component {
    @observable dailyDataGraphs = false;
    @observable cumulativeGraphs = true;
    @observable districtAnalysis = true;
    @observable onClickColor = '';
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.doNetworkCalls()
    }
    componentWillUnmount() {
        this.props.covid19StateStore.clearStore();
    }
    @action.bound
    doNetworkCalls =  () => {
        this.props.covid19StateStore.stateWidedReport()
        this.props.covid19StateStore.districtWiseDataAnalysis()
        this.props.covid19StateStore.stateWidedCumulativeReport()
        this.props.covid19StateStore.stateWidedDailyReport()
        this.props.covid19StateStore.districtWiseCumulativeReport()
        this.props.covid19StateStore.districtWiseDailyReport()

    }
    onClickSignOut = () => {
        this.props.authenticationStore.signOut();
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
    onClickZOnalDasboard() {
        this.props.covid19StateStore.stateWidedReport()
        this.districtAnalysis = true;
    }
    @action.bound
    onClickDistrictWiseAnalysis() {
        this.props.covid19StateStore.districtWiseDataAnalysis()
        this.districtAnalysis = false;
    }
    @action.bound
    onClickActive(event) {
        this.onClickColor = event.target.id;
    }
    @action.bound
    onClickConfirmed(event) {
        this.onClickColor = event.target.id;
    }
    @action.bound
    onClickRecovered(event) {
        this.onClickColor = event.target.id;
    }
    @action.bound
    onClickDeaths(event) {
        this.onClickColor = event.target.id;
    }
    render() {
        const { covid19StateStore } = this.props;
        return (
            <Covid19DashBoard key={Math.random()} onClickSignOut={this.onClickSignOut} onClickDaily={this.onClickDaily}
                dailyDataGraphs={this.dailyDataGraphs} onClickCumulative={this.onClickCumulative}
                cumulativeGraphs={this.cumulativeGraphs} onClickDistrictWiseAnalysis={this.onClickDistrictWiseAnalysis}
                onClickZOnalDasboard={this.onClickZOnalDasboard} districtAnalysis={this.districtAnalysis}
                covid19StateStore={covid19StateStore} doNetworkCalls={this.doNetworkCalls} onClickConfirmed={this.onClickConfirmed}
                onClickActive={this.onClickActive} onClickRecovered={this.onClickRecovered} onClickDeaths={this.onClickDeaths}
                onClickColor={this.onClickColor}
            />
        )
    }
}



const covid19DashboardRoute = (
    <ProtectedRoute exact path='/covid19-dashboard' component={DashBoardRoute} />
);

export default (covid19DashboardRoute);