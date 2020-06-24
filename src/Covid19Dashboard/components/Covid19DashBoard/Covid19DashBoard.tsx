import React from 'react';
import TableData from "../TableDataComponent";
import { observer, inject } from "mobx-react";
import SecondaryButton from "../../../Common/components/SecondaryButton";
import LoadingWrapperWithFailure from "../../../Common/components/common/LoadingWrapperWithFailure";
import strings from '../../i18n/strings.json';
import HeaderComponent from "../Header";
import TotalCases from "../TotalCasesComponent";
import DailyDataGraphs from "../DilyDataComponent";
import CumulativeDataComponent from "../CumulateDataComponent";
import { getLoadingStatus } from '@ib/api-utils';
import ConfirmedCasesGraphComponent from '../ConfirmedCasesGraph'
import {
    DashboardMainDiv,
    CasesDiv,
    MapAndGarphsDiv,
    OnclickCasesDiv,
    MapsAadGraphTotalDiv,
    OnlyGraphs,
    PositiveGraphsDiv,
    FooterData,
    TableDiv,
    DistrictWiseZonalMainDiv,
    ZonalDashBoard,
    TotalDataDiv,
    HomePageDataZonalDashboard, OnClickActive, OnClickCOnfirmed, OnClickRecovered, OnClickDeaths, MapMainDiv,
} from './styledComponents'
import SignOutButton from "../SignOut";
import DistrictWiseGraphComponent from "../DistrictWiseGraphComponent";
import MapComponent from "../MapComponent";
import Covid19StateStore from "../../stores/Covid19StateStore";

type DashboardPrps = {
    dailyDataGraphs:object
    onClickDaily: any
    onClickCumulative: any
    cumulativeGraphs:object
    districtAnalysis:boolean
    onClickDeaths:() =>void
    onClickRecovered:() =>void
    onClickConfirmed:() =>void
    onClickActive:() =>void
    onClickColor:string
    onClickDistrict:Function
    onClickDistrictWiseAnalysis:()=> void
    onClickSignOut:()=>void
    onClickZOnalDasboard:()=>void
    doNetworkCalls:()=>void
    covid19StateStore:Covid19StateStore
    onChangeDate:()=>void
}
@observer
class Covid19DashBoard extends React.Component <DashboardPrps> {
    renderList = observer(() => {
        const { dailyDataGraphs, onClickDaily, onClickCumulative, cumulativeGraphs,
            districtAnalysis, covid19StateStore, onClickDeaths, onClickRecovered,
            onClickActive, onClickConfirmed, onClickColor, onClickDistrict } = this.props;
        return districtAnalysis === true ?
            <HomePageDataZonalDashboard>
                <TotalDataDiv>
                    <HeaderComponent 
                        dailyDataGraphs={dailyDataGraphs} cumulativeGraphs={cumulativeGraphs}
                        districtName={covid19StateStore.districtName}
                        key={Math.random()} onClickDaily={onClickDaily} onClickCumulative={onClickCumulative} />
                </TotalDataDiv>
                <MapsAadGraphTotalDiv>
                    <MapAndGarphsDiv>
                        <TotalCases key={Math.random()} stateTotalData={covid19StateStore.stateTotalReport}
                            dailyReport={covid19StateStore.dailyReport} dailyDataGraphs={dailyDataGraphs}
                             />
                        <CasesDiv>
                            <OnclickCasesDiv>
                                <OnClickCOnfirmed id='confirmed' color={onClickColor} onClick={onClickConfirmed} >{strings.confirmed}</OnClickCOnfirmed>
                                <OnClickActive id='active' color={onClickColor} onClick={onClickActive} >{strings.active}</OnClickActive>
                                <OnClickRecovered id='recovered' color={onClickColor} onClick={onClickRecovered}>{strings.recovered}</OnClickRecovered>
                                <OnClickDeaths id='deaths' color={onClickColor} onClick={onClickDeaths}>{strings.deaths}</OnClickDeaths>
                            </OnclickCasesDiv>
                            <MapMainDiv>
                                {
                                    
                                    <MapComponent totalDistictsData={covid19StateStore.totalDistictsData} districtName={covid19StateStore.districtName} onClickDistrict={onClickDistrict} />
                                }

                            </MapMainDiv>
                        </CasesDiv>
                    </MapAndGarphsDiv>
                    <OnlyGraphs>
                        {
                            dailyDataGraphs ?
                                <DailyDataGraphs key={Math.random()} dailyReport={covid19StateStore.dailyReport} districtName={covid19StateStore.districtName} /> : null
                        }
                        {
                            cumulativeGraphs ?
                                <CumulativeDataComponent key={Math.random()} covid19StateStore={covid19StateStore} /> : null
                        }
                    </OnlyGraphs>

                </MapsAadGraphTotalDiv>
                <FooterData>
                    <TableDiv>
                        <TableData key={Math.random()} covid19StateStore={covid19StateStore} dailyDataGraphs={dailyDataGraphs} />
                    </TableDiv>
                    <PositiveGraphsDiv>
                        <ConfirmedCasesGraphComponent key={Math.random()} covid19StateStore={covid19StateStore} />
                    </PositiveGraphsDiv>
                </FooterData>

            </HomePageDataZonalDashboard> :
            <DistrictWiseZonalMainDiv>
                {
                    <DistrictWiseGraphComponent districtWiseAnalysis={covid19StateStore.districtWiseAnalysis} covid19StateStore={covid19StateStore} />
                }

            </DistrictWiseZonalMainDiv>
    })
    loadingStatus = () => {
        return getLoadingStatus(this.props.covid19StateStore.getCovid19StateAPIStatus)
    }
    render() {
        const { onClickSignOut,
            onClickDistrictWiseAnalysis, onClickZOnalDasboard, doNetworkCalls, covid19StateStore, districtAnalysis } = this.props;
        return (
            <DashboardMainDiv>
                <SignOutButton  onClickSignOut={onClickSignOut} />
                <ZonalDashBoard>
                    <SecondaryButton onClick={onClickZOnalDasboard} btnName={strings.zonalDashboard} />
                    <SecondaryButton onClick={onClickDistrictWiseAnalysis} btnName={strings.districtWiseCasesAnalysis} />
                </ZonalDashBoard>
                <LoadingWrapperWithFailure
                    apiStatus={this.loadingStatus()}
                    apiError={covid19StateStore.getCovid19StateAPIError}
                    onRetryClick={doNetworkCalls}
                    renderSuccessUI={this.renderList}
                />
            </DashboardMainDiv>
        )
    }
}

export { Covid19DashBoard };
