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
                        <DialyReportGraphs dailyReport={dailyReport} casesType="activeCases" color={"Tomato"}/>

                    }
                    
                
                </DailyDataGraphsDiv>
                <DailyDataGraphsDiv>
                    <GraphsHeading>{strings.dailyRecoveredCases}</GraphsHeading>
                    {
                        <DialyReportGraphs dailyReport={dailyReport} casesType="totalRecoveredCases" color={"MediumSeaGreen"}/>

                    }
                </DailyDataGraphsDiv>
                <DailyDataGraphsDiv>
                    <GraphsHeading>{strings.dailyDeaths}</GraphsHeading>
                    {
                        <DialyReportGraphs dailyReport={dailyReport} casesType="totalDeaths" color={"Orange"} />

                    }
                </DailyDataGraphsDiv>
            </div>
        )
    }
}

export { DailyDataGraphs }
