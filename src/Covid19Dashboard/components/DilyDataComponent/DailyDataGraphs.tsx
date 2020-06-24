import React, { Component } from 'react'
import { observer } from "mobx-react"
import DialyReportGraphs from "../../../Common/components/DialyReportGraphs/DialyReportGraphs";
import strings from '../../i18n/strings.json';
import { DailyDataGraphsDiv, GraphsHeading } from './styledComponents';
import Covid19StateStore from "../../stores/Covid19StateStore";
type DailyDAtaProps = {
    dailyReport:{dailyCumulative:any}
    districtName:string
    dialyCasses:any
    dailyCumulative:any
}

@observer
class DailyDataGraphs extends Component<DailyDAtaProps> {
    dialyCasses:any
    render() {
        const { dailyReport, districtName } = this.props;
        if (districtName === '') {
            this.dialyCasses = dailyReport.dailyCumulative;
        }
        else {
            this.dialyCasses = dailyReport.dailyCumulative;
        }
        return (
            <div>
                <DailyDataGraphsDiv>
                    <GraphsHeading>{strings.dailyConfirmedCases}</GraphsHeading>
                    {
                        <DialyReportGraphs dailyReport={this.dialyCasses} casesType="activeCases" color={"#e03131"} />

                    }


                </DailyDataGraphsDiv>
                <DailyDataGraphsDiv>
                    <GraphsHeading>{strings.dailyRecoveredCases}</GraphsHeading>
                    {
                        <DialyReportGraphs dailyReport={this.dialyCasses} casesType="totalRecoveredCases" color={"rgb(47, 158, 68)"} />

                    }
                </DailyDataGraphsDiv>
                <DailyDataGraphsDiv>
                    <GraphsHeading>{strings.dailyDeaths}</GraphsHeading>
                    {
                        <DialyReportGraphs dailyReport={this.dialyCasses} casesType="totalDeaths" color={"#e67700"} />

                    }
                </DailyDataGraphsDiv>
            </div>
        )
    }
}

export { DailyDataGraphs }
