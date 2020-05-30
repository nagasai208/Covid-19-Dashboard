import React from 'react';
import TableData from "../TableDataComponent";
import { observer } from "mobx-react";
import SignOutRoute from "../../routes/SignOUtRoute";
import SecondaryButton from "../../../Common/components/SecondaryButton";
import LoadingWrapperWithFailure from "../../../components/common/LoadingWrapperWithFailure";
import DistrictWiseGraph from "../../../Common/components/DistrictWiseGraph/DistrictWiseGraph";
import strings from '../../i18n/strings.json';
import HeaderComponent from "../Header";
import TotalCases from "../TotalCasesComponent";
import DailyDataGraphs from "../DilyDataComponent";
import CumulativeDataComponent from "../CumulateDataComponent";
import ConfirmedCasesGraphComponent from '../ConfirmedCasesGraph'
import {
    DashboardMainDiv, CasesDiv, MapAndGarphsDiv, OnclickCasesDiv, MapsAadGraphTotalDiv,
    OnlyGraphs, PositiveGraphsDiv, FooterData, TableDiv, DistrictWiseZonalMainDiv, DistrictWiseZonalDiv, ZonalDashBoard, TotalDataDiv,
    HomePageDataZonalDashboard
} from './styledComponent'

@observer
class Covid19DashBoard extends React.Component {
    renderList = observer(() => {
        const { dailyDataGraphs, onClickDaily, onClickCumulative, cumulativeGraphs,
            districtAnalysis, stateTotalData, covid19StateStore } = this.props;
        return districtAnalysis === true ?
            <HomePageDataZonalDashboard>
                <TotalDataDiv>
                    <HeaderComponent stateTotalData={stateTotalData} key={Math.random()} onClickDaily={onClickDaily} onClickCumulative={onClickCumulative} />
                </TotalDataDiv>
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
                            dailyDataGraphs ?
                                <DailyDataGraphs key={Math.random()} covid19StateStore={covid19StateStore} /> : null
                        }
                        {
                            cumulativeGraphs ?
                            <CumulativeDataComponent key={Math.random()} covid19StateStore={covid19StateStore} />:null
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

            </HomePageDataZonalDashboard> :
            <DistrictWiseZonalMainDiv>
                {
                    covid19StateStore.zonalDistrictData !== undefined &&
                    covid19StateStore.zonalDistrictData.districts.map((item) => {
                        return <DistrictWiseZonalMainDiv>
                            <DistrictWiseZonalDiv>
                                <p>{`${strings.cumulativeConfirmCases}-${item.district_name}`}</p>
                                <DistrictWiseGraph data={item} />
                                <p>{item.district_name}</p>
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
                <ZonalDashBoard>
                    <SecondaryButton key={Math.random()} onClick={onClickZOnal} btnName={strings.zonalDashboard} />
                    <SecondaryButton key={Math.random()} onClick={onClickZOnalDashBoard} btnName={strings.districtWiseCasesAnalysis} />
                </ZonalDashBoard>
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