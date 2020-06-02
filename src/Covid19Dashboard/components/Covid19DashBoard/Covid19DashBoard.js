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
    DistrictWiseZonalDiv,
    ZonalDashBoard,
    TotalDataDiv,
    HomePageDataZonalDashboard, OnClickActive, OnClickCOnfirmed, OnClickRecovered, OnClickDeaths,MapMainDiv,
} from './styledComponents'
//  import GeoJsonLayer from "../MapComponent/StateMap";

@observer
class Covid19DashBoard extends React.Component {
    renderList = observer(() => {
        const { dailyDataGraphs, onClickDaily, onClickCumulative, cumulativeGraphs,
            districtAnalysis, covid19StateStore, onClickDeaths, onClickRecovered,
            onClickActive, onClickConfirmed, onClickColor } = this.props;
        return districtAnalysis === true ?
            <HomePageDataZonalDashboard>
                <TotalDataDiv>
                    <HeaderComponent stateTotalData={covid19StateStore.stateTotalReport} onChangeDate={covid19StateStore.onChangeDate}
                        key={Math.random()} onClickDaily={onClickDaily} onClickCumulative={onClickCumulative} />
                </TotalDataDiv>
                <MapsAadGraphTotalDiv>
                    <MapAndGarphsDiv>
                        <TotalCases key={Math.random()} stateTotalData={covid19StateStore.stateTotalReport} />
                        <CasesDiv>
                            <OnclickCasesDiv>
                                <OnClickCOnfirmed id='confirmed' color={onClickColor} onClick={onClickConfirmed}>{strings.confirmed}</OnClickCOnfirmed>
                                <OnClickActive id='active' color={onClickColor} onClick={onClickActive}>{strings.active}</OnClickActive>
                                <OnClickRecovered id='recovered' color={onClickColor} onClick={onClickRecovered}>{strings.recovered}</OnClickRecovered>
                                <OnClickDeaths id='deaths' color={onClickColor}  onClick={onClickDeaths}>{strings.deaths}</OnClickDeaths>
                            </OnclickCasesDiv>
                            <MapMainDiv>
                                <h1>Hello</h1>
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
                    covid19StateStore.districtWiseAnalysis.districts.map((item) => {
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
            onClickDistrictWiseAnalysis, onClickZOnalDasboard, doNetworkCalls, covid19StateStore } = this.props;
        return (
            <DashboardMainDiv>
                <SignOutRoute key={Math.random()} onClickSignOut={onClickSignOut} />
                <ZonalDashBoard>
                    <SecondaryButton key={Math.random()} onClick={onClickZOnalDasboard} btnName={strings.zonalDashboard} />
                    <SecondaryButton key={Math.random()} onClick={onClickDistrictWiseAnalysis} btnName={strings.districtWiseCasesAnalysis} />
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

export { Covid19DashBoard };
