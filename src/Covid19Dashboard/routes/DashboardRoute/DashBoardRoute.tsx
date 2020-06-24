import React from 'react';
import { observer, inject } from "mobx-react";
import { observable, action, toJS } from "mobx";
import Covid19DashBoard from "../../components/Covid19DashBoard";
import { ProtectedRoute } from "../../../Common/routes/ProtectedRoute/ProtectedRoute";
import Covid19StateStore from "../../stores/Covid19StateStore";
import AuthenticationStore from "../../../Authentication/stores/AuthenticationStore";
type CovidDashBoardProps = {
    covid19StateStore:Covid19StateStore
    authenticationStore:AuthenticationStore
}
@inject('covid19StateStore', 'authenticationStore')
@observer
class DashBoardRoute extends React.Component<CovidDashBoardProps> {
    @observable dailyDataGraphs = false;
    @observable cumulativeGraphs = true;
    @observable districtAnalysis = true;
    @observable onClickColor = 'confirmed';
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
    doNetworkCalls = async () => {
        this.props.covid19StateStore.stateWidedDailyReport()
        this.props.covid19StateStore.stateWideCumulativeReport();
        this.props.covid19StateStore.stateWidedDailyCumulativeReport()
        this.props.covid19StateStore.districtWideDataAnalysis()
        await this.props.covid19StateStore.stateWidReport()


    }

    onClickSignOut = (event) => {
        this.props.authenticationStore.signOut();
    }

    @action.bound
    onClickDistrict() {
        this.cumulativeGraphs = true;
        this.dailyDataGraphs = false;
        this.props.covid19StateStore.daily = false;
    }
    @action.bound
    onClickDaily(event: any) {
        this.dailyDataGraphs = true;
        this.cumulativeGraphs = false;
        this.props.covid19StateStore.daily = true;
        if (this.props.covid19StateStore.districtName === '') {
            this.props.covid19StateStore.stateDailyReport()
        }
        else {
            let id = this.props.covid19StateStore.districtId;
            this.props.covid19StateStore.districtDailyReport(id)
        }
    }
    @action.bound
    async onClickCumulative(event) {
        this.cumulativeGraphs = true;
        this.dailyDataGraphs = false;
        this.props.covid19StateStore.daily = false;

        if (this.props.covid19StateStore.districtName === '') {

            this.props.covid19StateStore.stateWidReport()
        }
        else {
            let id = this.props.covid19StateStore.districtId;
            await this.props.covid19StateStore.districtWidReport(id)
        }
    }

    @action.bound
    async onClickZOnalDasboard(event) {
        this.props.covid19StateStore.districtName = '';
        this.districtAnalysis = true;
        this.dailyDataGraphs = false;
        this.cumulativeGraphs = true;
        this.props.covid19StateStore.daily = false;
        if (this.dailyDataGraphs) {
            this.props.covid19StateStore.stateDailyReport()
        }
        else {
            this.props.covid19StateStore.stateWidReport()
        }

        this.props.covid19StateStore.stateWidedDailyReport()
        this.props.covid19StateStore.regionType = '';
    }
    @action.bound
    onClickDistrictWiseAnalysis(event) {
        this.props.covid19StateStore.districtWideDataAnalysis()
        this.districtAnalysis = false;
    }
    @action.bound
    onClickActive(event: { target: { id: string; }; }) {
        this.onClickColor = event.target.id;
    }
    @action.bound
    onClickConfirmed(event: { target: { id: string; }; }) {
        this.onClickColor = event.target.id;
    }
    @action.bound
    onClickRecovered(event: { target: { id: string; }; }) {
        this.onClickColor = event.target.id;
    }
    @action.bound
    onClickDeaths(event: { target: { id: string; }; }) {
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
                onClickColor={this.onClickColor} onClickDistrict={this.onClickDistrict}
            />
        )
    }
}



const Covid19DashboardRoute = (
    <ProtectedRoute exact path='/covid19-dashboard' component={DashBoardRoute} />
);

export default Covid19DashboardRoute;