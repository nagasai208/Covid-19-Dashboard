import React from 'react';
import TableData from "../TableDataComponent";
import { observer, inject } from "mobx-react";
import SecondaryButton from "../../../Common/components/SecondaryButton";
import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure";
import strings from '../../i18n/strings.json';
import HeaderComponent from "../Header";
import TotalCases from "../TotalCasesComponent";
import DailyDataGraphs from "../DilyDataComponent";
import CumulativeDataComponent from "../CumulateDataComponent";
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
@observer
class Covid19DashBoard extends React.Component {
    renderList = observer(() => {
        const { dailyDataGraphs, onClickDaily, onClickCumulative, cumulativeGraphs,
            districtAnalysis, covid19StateStore, onClickDeaths, onClickRecovered,
            onClickActive, onClickConfirmed, onClickColor } = this.props;
        return districtAnalysis === true ?
            <HomePageDataZonalDashboard>
                <TotalDataDiv>
                    <HeaderComponent stateTotalData={covid19StateStore.stateTotalReport}
                        dailyDataGraphs={dailyDataGraphs} cumulativeGraphs={cumulativeGraphs}
                        onChangeDate={covid19StateStore.onChangeDate} districtName={covid19StateStore.districtName}
                        key={Math.random()} onClickDaily={onClickDaily} onClickCumulative={onClickCumulative} />
                </TotalDataDiv>
                <MapsAadGraphTotalDiv>
                    <MapAndGarphsDiv>
                        <TotalCases key={Math.random()} stateTotalData={covid19StateStore.stateTotalReport}
                            dailyReport={covid19StateStore.dailyReport} dailyDataGraphs={dailyDataGraphs}
                            districtName={covid19StateStore.districtName} />
                        <CasesDiv>
                            <OnclickCasesDiv>    
                                <OnClickCOnfirmed id='confirmed' color={onClickColor} onClick={onClickConfirmed} >{strings.confirmed}</OnClickCOnfirmed>
                                <OnClickActive id='active' color={onClickColor} onClick={ onClickActive} >{strings.active}</OnClickActive>
                                <OnClickRecovered id='recovered' color={onClickColor} onClick={onClickRecovered}>{strings.recovered}</OnClickRecovered>
                                <OnClickDeaths id='deaths' color={onClickColor} onClick={onClickDeaths}>{strings.deaths}</OnClickDeaths>
                            </OnclickCasesDiv>
                            <MapMainDiv>
                                {
                                    covid19StateStore.regionType !== 'mandals' &&
                                    <MapComponent covid19StateStore={covid19StateStore} />
                                }
                               
                            </MapMainDiv>
                        </CasesDiv>
                    </MapAndGarphsDiv>
                    <OnlyGraphs>
                        {
                            dailyDataGraphs ?
                                <DailyDataGraphs key={Math.random()} covid19StateStore={covid19StateStore} /> : null
                        }
                        {
                            cumulativeGraphs ?
                                <CumulativeDataComponent key={Math.random()} covid19StateStore={covid19StateStore} /> : null
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
                    <DistrictWiseGraphComponent covid19StateStore={covid19StateStore} />
                }

            </DistrictWiseZonalMainDiv>
    })
    render() {
        const { onClickSignOut,
            onClickDistrictWiseAnalysis, onClickZOnalDasboard, doNetworkCalls, covid19StateStore, districtAnalysis } = this.props;
        return (
            <DashboardMainDiv>
                <SignOutButton bgColor='signOut' onClickSignOut={onClickSignOut} />
                <ZonalDashBoard>
                    <SecondaryButton   onClick={onClickZOnalDasboard} btnName={strings.zonalDashboard} />
                    <SecondaryButton  onClick={onClickDistrictWiseAnalysis} btnName={strings.districtWiseCasesAnalysis} />
                </ZonalDashBoard>
                <LoadingWrapperWithFailure
                    apiStatus={covid19StateStore.getCovid19StateAPIStatus}
                    apiError={covid19StateStore.getCovid19StateAPIError}
                    onRetryClick={doNetworkCalls}
                    renderSuccessUI={this.renderList}
                />
            </DashboardMainDiv>
        )
    }
}

export { Covid19DashBoard };
