import React, { Component } from 'react';
import strings from '../../i18n/strings.json';
import { HeadeMainDiv, StateName, Date, DateHeading, CasesButton, ButtonCumulative, ButtonDaily } from './styledComponents';
import { observer } from "mobx-react";
import DatePickerComponent from "../DatePicker";
@observer
class HeaderComponent extends Component {
    render() {
        const { onClickDaily, onClickCumulative, stateTotalData, onChangeDate, dailyDataGraphs, cumulativeGraphs } = this.props;
        return (
            <HeadeMainDiv>
                <StateName>{stateTotalData.stateName}</StateName>
                <Date><DateHeading>{strings.date}:</DateHeading> <DatePickerComponent onChangeDate={onChangeDate} /></Date>
                <CasesButton>
                    <ButtonCumulative color={cumulativeGraphs} onClick={onClickCumulative}> {strings.cumulative} </ButtonCumulative>
                    <ButtonDaily color={dailyDataGraphs} onClick={onClickDaily}> {strings.dialy} </ButtonDaily>
                </CasesButton>
            </HeadeMainDiv>
        )
    }
}

export {
    HeaderComponent
}



