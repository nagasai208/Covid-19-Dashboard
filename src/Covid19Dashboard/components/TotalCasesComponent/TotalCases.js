import React, { Component } from 'react'
import strings from '../../i18n/strings.json';
import { TotalCasesMainDiv, CasesCount, ConfirmedCases, ActiveCases, RecoveredCases, Deaths} from './styledComponent';

 class TotalCases extends Component {
    render() {
        return (
            <TotalCasesMainDiv>
                <ConfirmedCases>{strings.confirmed}<CasesCount>1</CasesCount></ConfirmedCases>
                <ActiveCases>{strings.active}<CasesCount>1</CasesCount></ActiveCases>
                <RecoveredCases>{strings.recovered}<CasesCount>1</CasesCount></RecoveredCases>
                <Deaths>{strings.deaths}<CasesCount>1</CasesCount></Deaths>
            </TotalCasesMainDiv>
        )
    }
}

export { TotalCases }
