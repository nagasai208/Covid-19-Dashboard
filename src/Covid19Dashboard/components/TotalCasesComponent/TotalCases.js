import React, { Component } from 'react'
import strings from '../../i18n/strings.json';
import { observer } from "mobx-react";
import { TotalCasesMainDiv, CasesCount, ConfirmedCases, ActiveCases, RecoveredCases, Deaths } from './styledComponents';

@observer
 class TotalCases extends Component {
    render() {
        const { stateTotalData } = this.props;
        return (
            <TotalCasesMainDiv>
                <ConfirmedCases>{strings.confirmed}<CasesCount>{stateTotalData.totalCases}</CasesCount></ConfirmedCases>
                <ActiveCases>{strings.active}<CasesCount>{stateTotalData.activeCases}</CasesCount></ActiveCases>
                <RecoveredCases>{strings.recovered}<CasesCount>{stateTotalData.totalRecoveredCases}</CasesCount></RecoveredCases>
                <Deaths>{strings.deaths}<CasesCount>{stateTotalData.totalDeaths}</CasesCount></Deaths>
            </TotalCasesMainDiv>
        )
    }
}

export { TotalCases }
