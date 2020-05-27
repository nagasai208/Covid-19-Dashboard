import React from 'react';
import TableData from "../TableDataComponent";
import { observer } from "mobx-react";
import SignOutRoute from "../../routes/SignOUtRoute";
import { DashboardMainDiv, CasesDiv, MapAndGarphsDiv, OnclickCasesDiv, MapsAadGraphTotalDiv, OnlyGraphs, PositiveGraphsDiv, FooterData, TableDiv} from './styledComponent'
import SecondaryButton from "../../../Common/components/SecondaryButton";
import strings from '../../i18n/strings.json';
import HeaderComponent from "../Header";
import TotalCases from "../TotalCasesComponent";
import DailyDataGraphs from "../DilyDataComponent";
import CumulativeDataComponent from "../CumulateDataComponent";
import ConfirmedCasesGraphComponent from '../ConfirmedCasesGraph'
@observer
class Covid19DashBoard extends React.Component {
    render() {
        const { onClickSignOut, dailyDataGraphs, onClickDaily, onClickCumulative, cumulativeGraphs } = this.props;
        return (
            <DashboardMainDiv>
                <SignOutRoute onClickSignOut={onClickSignOut} />
                <div>
                    <SecondaryButton btnName={strings.zonalDashboard} />
                    <SecondaryButton btnName={strings.districtWiseCasesAnalysis} />
                </div>
                <div>
                    <HeaderComponent onClickDaily={onClickDaily} onClickCumulative={onClickCumulative}/>
                </div>
                <MapsAadGraphTotalDiv>
                <MapAndGarphsDiv>
                    <TotalCases />
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
                            <DailyDataGraphs />
                        }
                        {
                            cumulativeGraphs === true &&
                            <CumulativeDataComponent />
                        }
                    </OnlyGraphs>
                   
                </MapsAadGraphTotalDiv>
                <FooterData>
                    <TableDiv>
                        <TableData />
                    </TableDiv>
                    <PositiveGraphsDiv>
                        <ConfirmedCasesGraphComponent />
                    </PositiveGraphsDiv>
                </FooterData>

            </DashboardMainDiv>
        )
    }
}

export {
    Covid19DashBoard
}