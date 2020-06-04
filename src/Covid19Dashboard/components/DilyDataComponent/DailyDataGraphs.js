import React, { Component } from 'react'
import { observer } from "mobx-react"
import DialyReportGraphs from "../../../Common/components/DialyReportGraphs/DialyReportGraphs";
import strings from '../../i18n/strings.json';
import { DailyDataGraphsDiv, GraphsHeading} from './styledComponents';

@observer
class DailyDataGraphs extends Component {
    render() {
        const { dailyReport } = this.props.covid19StateStore;
        return (
            <div>
                <DailyDataGraphsDiv>
                    <GraphsHeading>{strings.dailyConfirmedCases}</GraphsHeading>
                    {
                        <DialyReportGraphs dailyReport={dailyReport} casesType="active_cases" color={"#e03131"}/>

                    }
                    
                
                </DailyDataGraphsDiv>
                <DailyDataGraphsDiv>
                    <GraphsHeading>{strings.dailyRecoveredCases}</GraphsHeading>
                    {
                        <DialyReportGraphs dailyReport={dailyReport} casesType="total_recovered_cases" color={"rgb(47, 158, 68)"}/>

                    }
                </DailyDataGraphsDiv>
                <DailyDataGraphsDiv>
                    <GraphsHeading>{strings.dailyDeaths}</GraphsHeading>
                    {
                        <DialyReportGraphs dailyReport={dailyReport} casesType="total_deaths" color={"#e67700"} />

                    }
                </DailyDataGraphsDiv>
            </div>
        )
    }
}

export { DailyDataGraphs }
