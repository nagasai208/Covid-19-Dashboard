import React from 'react';
import TableData from "../TableDataComponent";
import { observer } from "mobx-react";
import SignOutRoute from "../../routes/SignOUtRoute";
import {
    DashboardMainDiv, CasesDiv, MapAndGarphsDiv, OnclickCasesDiv, MapsAadGraphTotalDiv,
    OnlyGraphs, PositiveGraphsDiv, FooterData, TableDiv, DistrictWiseZonalMainDiv, DistrictWiseZonalDiv
} from './styledComponent'
import SecondaryButton from "../../../Common/components/SecondaryButton";
import strings from '../../i18n/strings.json';
import HeaderComponent from "../Header";
import TotalCases from "../TotalCasesComponent";
import DailyDataGraphs from "../DilyDataComponent";
import CumulativeDataComponent from "../CumulateDataComponent";
import ConfirmedCasesGraphComponent from '../ConfirmedCasesGraph'
import LoadingWrapperWithFailure from "../../../components/common/LoadingWrapperWithFailure";
import DistrictWiseGraph from "../../../Common/components/DistrictWiseGraph/DistrictWiseGraph";

@observer
class Covid19DashBoard extends React.Component {

    renderList = observer(() => {
        const { dailyDataGraphs, onClickDaily, onClickCumulative, cumulativeGraphs,
            districtAnalysis, stateTotalData, covid19StateStore } = this.props;

        return districtAnalysis === true ?
            <div>
                <div>
                    <HeaderComponent stateTotalData={stateTotalData} key={Math.random()} onClickDaily={onClickDaily} onClickCumulative={onClickCumulative} />
                </div>
                <MapsAadGraphTotalDiv>
                    <MapAndGarphsDiv>
                        <TotalCases key={Math.random()} stateTotalData={stateTotalData} />
                        <CasesDiv>
                            <OnclickCasesDiv>
                                <a href="#">{strings.confirmed}</a>
                                <a href="#">{strings.active}</a>
                                <a href="#">{strings.recovered}</a>
                                <a href="#">{strings.deaths}</a>
                            </OnclickCasesDiv>
                        </CasesDiv>
                    </MapAndGarphsDiv>
                    <OnlyGraphs>
                        {
                            dailyDataGraphs === true &&
                            <DailyDataGraphs key={Math.random()} />
                        }
                        {
                            cumulativeGraphs === true &&
                            <CumulativeDataComponent key={Math.random()} covid19StateStore={covid19StateStore}  />
                        }
                    </OnlyGraphs>

                </MapsAadGraphTotalDiv>
                <FooterData>
                    <TableDiv>
                        <TableData key={Math.random()} covid19StateStore={covid19StateStore} />
                    </TableDiv>
                    <PositiveGraphsDiv>
                        <ConfirmedCasesGraphComponent key={Math.random()} covid19StateStore={covid19StateStore} />
                    </PositiveGraphsDiv>
                </FooterData>

            </div> :
            <DistrictWiseZonalMainDiv>
                {
                    covid19StateStore.totalDistictsData.map((item) => {
                        return <DistrictWiseZonalMainDiv>
                            <DistrictWiseZonalDiv>
                                <DistrictWiseGraph totalDistictsData={covid19StateStore.totalDistictsData} />
                                <p>{item.districtName}</p>
                            </DistrictWiseZonalDiv>
                        </DistrictWiseZonalMainDiv>
                        
                    })
                }
               
            </DistrictWiseZonalMainDiv>
    })
    render() {
        const { onClickSignOut,
            onClickZOnalDashBoard, onClickZOnal, doNetworkCalls, covid19StateStore } = this.props;
        return (
            <DashboardMainDiv>
                <SignOutRoute key={Math.random()} onClickSignOut={onClickSignOut} />
                <div>
                    <SecondaryButton key={Math.random()} onClick={onClickZOnal} btnName={strings.zonalDashboard} />
                    <SecondaryButton key={Math.random()} onClick={onClickZOnalDashBoard} btnName={strings.districtWiseCasesAnalysis} />
                </div>
                <LoadingWrapperWithFailure
                    apiStatus={covid19StateStore.getCovid19CasesAPIStatus}
                    apiError={covid19StateStore.getCovid19CasesAPIError}
                    onRetryClick={doNetworkCalls}
                    renderSuccessUI={this.renderList}
                />
            </DashboardMainDiv>
        )
    }
}

export {
    Covid19DashBoard
}