import React, { Component } from 'react'
import strings from '../../i18n/strings.json';
import { observer } from "mobx-react";
import { TotalCasesMainDiv, CasesCount, ConfirmedCases, ActiveCases, RecoveredCases, Deaths } from './styledComponents';
import { toJS } from "mobx";

@observer
class TotalCases extends Component {
    render() {
        const { stateTotalData, dailyReport, dailyDataGraphs, districtName } = this.props;
        if (dailyDataGraphs)
        {
            return (
                < TotalCasesMainDiv >
                    <ConfirmedCases>{strings.confirmed}<CasesCount>{stateTotalData.totalCases}</CasesCount></ConfirmedCases>
                    <ActiveCases>{strings.active}<CasesCount>{stateTotalData.totalCases}</CasesCount></ActiveCases>
                    <RecoveredCases>{strings.recovered}<CasesCount>{stateTotalData.totalRecoveredCases}</CasesCount></RecoveredCases>
                    <Deaths>{strings.deaths}<CasesCount>{stateTotalData.totalDeaths}</CasesCount></Deaths>
                </TotalCasesMainDiv >

            )
        }
        else {
            return (
                < TotalCasesMainDiv >
                    <ConfirmedCases>{strings.confirmed}<CasesCount>{stateTotalData.totalCases}</CasesCount></ConfirmedCases>
                    <ActiveCases>{strings.active}<CasesCount>{stateTotalData.activeCases}</CasesCount></ActiveCases>
                    <RecoveredCases>{strings.recovered}<CasesCount>{stateTotalData.totalRecoveredCases}</CasesCount></RecoveredCases>
                    <Deaths>{strings.deaths}<CasesCount>{stateTotalData.totalDeaths}</CasesCount></Deaths>
                </TotalCasesMainDiv >
            )
         }
        
    }
}

export { TotalCases }
