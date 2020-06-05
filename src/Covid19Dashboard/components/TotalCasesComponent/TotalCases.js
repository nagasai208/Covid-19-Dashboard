import React, { Component } from 'react'
import strings from '../../i18n/strings.json';
import { observer } from "mobx-react";
import { TotalCasesMainDiv, CasesCount, ConfirmedCases, ActiveCases, RecoveredCases, Deaths } from './styledComponents';
import { toJS } from "mobx";

@observer
class TotalCases extends Component {
    render() {
        const { stateTotalData, dailyReport, dailyDataGraphs, districtName } = this.props;
        if (dailyDataGraphs && districtName==='')
        {
            return (
                < TotalCasesMainDiv >
                    <ConfirmedCases>{strings.confirmed}<CasesCount>{dailyReport[0].total_cases}</CasesCount></ConfirmedCases>
                    <ActiveCases>{strings.active}<CasesCount>{dailyReport[0].active_cases}</CasesCount></ActiveCases>
                    <RecoveredCases>{strings.recovered}<CasesCount>{dailyReport[0].total_recovered_cases}</CasesCount></RecoveredCases>
                    <Deaths>{strings.deaths}<CasesCount>{dailyReport[0].total_deaths}</CasesCount></Deaths>
                </TotalCasesMainDiv >

            )
        }
        else {
            return (
                < TotalCasesMainDiv >
                    <ConfirmedCases>{strings.confirmed}<CasesCount>{stateTotalData.total_cases}</CasesCount></ConfirmedCases>
                    <ActiveCases>{strings.active}<CasesCount>{stateTotalData.active_cases}</CasesCount></ActiveCases>
                    <RecoveredCases>{strings.recovered}<CasesCount>{stateTotalData.total_recovered_cases}</CasesCount></RecoveredCases>
                    <Deaths>{strings.deaths}<CasesCount>{stateTotalData.total_deaths}</CasesCount></Deaths>
                </TotalCasesMainDiv >
            )
        }
        
    }
}

export { TotalCases }
