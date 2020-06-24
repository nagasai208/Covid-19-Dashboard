import React, { Component } from 'react'
import strings from '../../i18n/strings.json';
import { observer } from "mobx-react";
import { TotalCasesMainDiv, CasesCount, ConfirmedCases, ActiveCases, RecoveredCases, Deaths } from './styledComponents';
type TotalCasesProps = {
    stateTotalData:{totalCases:number,totalRecoveredCases:number,totalDeaths:number,activeCases:number}
    dailyDataGraphs:boolean
    
}

@observer
class TotalCases extends Component <TotalCasesProps>{
    render() {
        const { stateTotalData, dailyDataGraphs } = this.props;
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
