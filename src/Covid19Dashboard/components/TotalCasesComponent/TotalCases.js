import React, { Component } from 'react'
import strings from '../../i18n/strings.json';
import { TotalCasesMainDiv, CasesCount, ConfirmedCases, ActiveCases, RecoveredCases, Deaths } from './styledComponent';
import { observer } from "mobx-react";
@observer
 class TotalCases extends Component {
    render() {
        const { stateTotalData } = this.props;
        return (
            <TotalCasesMainDiv>
                <ConfirmedCases>{strings.confirmed}<CasesCount>{stateTotalData.total_cases}</CasesCount></ConfirmedCases>
                <ActiveCases>{strings.active}<CasesCount>{stateTotalData.active_cases}</CasesCount></ActiveCases>
                <RecoveredCases>{strings.recovered}<CasesCount>{stateTotalData.total_recovered_cases}</CasesCount></RecoveredCases>
                <Deaths>{strings.deaths}<CasesCount>{stateTotalData.total_deaths}</CasesCount></Deaths>
            </TotalCasesMainDiv>
        )
    }
}

export { TotalCases }
