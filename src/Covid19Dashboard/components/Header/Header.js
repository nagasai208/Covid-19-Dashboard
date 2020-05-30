import React, { Component } from 'react';
import SecondaryButton from "../../../Common/components/SecondaryButton";
import strings from '../../i18n/strings.json';
import DatePickerRoute from "../../routes/DatePickerRoute"
import { HeadeMainDiv, StateName, Date, DateHeading, CasesButton} from './styledComponents';

class HeaderComponent extends Component {
    render() {
        const { onClickDaily, onClickCumulative, stateTotalData } = this.props;
        return (
            <HeadeMainDiv>
                <StateName>{stateTotalData.stateName}</StateName>
                <Date><DateHeading>{strings.date}:</DateHeading> <DatePickerRoute /></Date>
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



