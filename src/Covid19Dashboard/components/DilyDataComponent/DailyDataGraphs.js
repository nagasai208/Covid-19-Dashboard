import React, { Component } from 'react'
import { observer } from "mobx-react"
import Graphs from "../../../Common/components/Graphs/Graphs";
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
                        <Graphs dailyReport={dailyReport} casesType="activeCases" color={"Tomato"}/>

                    }
                    
                
                </DailyDataGraphsDiv>
                <DailyDataGraphsDiv>
                    <GraphsHeading>{strings.dailyRecoveredCases}</GraphsHeading>
                    {
                        <Graphs dailyReport={dailyReport} casesType="totalRecoveredCases" color={"MediumSeaGreen"}/>

                    }
                </DailyDataGraphsDiv>
                <DailyDataGraphsDiv>
                    <GraphsHeading>{strings.dailyDeaths}</GraphsHeading>
                    {
                        <Graphs dailyReport={dailyReport} casesType="totalDeaths" color={"Orange"} />

                    }
                </DailyDataGraphsDiv>
            </div>
        )
    }
}

export { DailyDataGraphs }
