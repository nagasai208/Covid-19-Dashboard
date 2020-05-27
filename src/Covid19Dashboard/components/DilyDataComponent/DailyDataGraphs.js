import React, { Component } from 'react'
import { observer } from "mobx-react"
import { observable, action } from "mobx"
import Graphs from "../../../Common/components/Graphs/Graphs";
import { DailyDataGraphsDiv, GraphsHeading} from './styledComponent';
import strings from '../../i18n/strings.json';
@observer
class DailyDataGraphs extends Component {
    render() {
        return (
            <div>
                <DailyDataGraphsDiv>
                    <GraphsHeading>{strings.dailyConfirmedCases}</GraphsHeading>
                <Graphs />
                </DailyDataGraphsDiv>
                <DailyDataGraphsDiv>
                    <GraphsHeading>{strings.dailyRecoveredCases}</GraphsHeading>
                    <Graphs />
                </DailyDataGraphsDiv>
                <DailyDataGraphsDiv>
                    <GraphsHeading>{strings.dailyDeaths}</GraphsHeading>
                    <Graphs />
                </DailyDataGraphsDiv>
            </div>
        )
    }
}

export { DailyDataGraphs }
