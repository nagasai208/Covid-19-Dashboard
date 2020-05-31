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
         this.props.covid19StateStore.stateCasesApi()
         this.props.covid19StateStore.districtCasesApi()
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
    onClickZOnal() {
        this.props.covid19StateStore.stateCasesApi()
        this.props.covid19StateStore.districtCasesApi()
        this.districtAnalysis = true;
    }
    @action.bound
     onClickZOnalDashBoard() {
         this.props.covid19StateStore.zonalWiseDistrictData()
        this.districtAnalysis = false;
    }
    render() {
        const { covid19StateStore } = this.props;
        return (
            <Covid19DashBoard key={Math.random()} onClickSignOut={this.onClickSignOut} onClickDaily={this.onClickDaily}
                dailyDataGraphs={this.dailyDataGraphs} onClickCumulative={this.onClickCumulative}
                cumulativeGraphs={this.cumulativeGraphs} onClickZOnalDashBoard={this.onClickZOnalDashBoard}
                onClickZOnal={this.onClickZOnal} districtAnalysis={this.districtAnalysis} stateTotalData={covid19StateStore.stateTotalData}
                covid19StateStore={covid19StateStore} doNetworkCalls={this.doNetworkCalls} />
        )
    }
}



const covid19DashboardRoute = (
    <ProtectedRoute exact path='/covid19-dashboard' component={DashBoardRoute} />
);

export default (covid19DashboardRoute);