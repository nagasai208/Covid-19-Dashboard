import React, { Component } from 'react';
import SecondaryButton from "../../../Common/components/SecondaryButton";
import strings from '../../i18n/strings.json';
import { HeadeMainDiv, StateName, Date, DateHeading, CasesButton } from './styledComponents';
import { observer } from "mobx-react";
import DatePickerComponent from "../DatePicker";
@observer
class HeaderComponent extends Component {
    render() {
        const { onClickDaily, onClickCumulative, stateTotalData, onChangeDate } = this.props;
        return (
            <HeadeMainDiv>
                <StateName>{stateTotalData.stateName}</StateName>
                <Date><DateHeading>{strings.date}:</DateHeading> <DatePickerComponent onChangeDate={onChangeDate} /></Date>
                <CasesButton>
                    <SecondaryButton onClick={onClickCumulative} btnName={strings.cumulative} />
                    <SecondaryButton onClick={onClickDaily} btnName={strings.dialy} />
                </CasesButton>
            </HeadeMainDiv>
        )
    }
}

export {
    HeaderComponent
}



