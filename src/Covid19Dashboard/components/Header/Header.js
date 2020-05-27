import React, { Component } from 'react';
import  DatePickerRoute  from "../../routes/DatePickerRoute"
import SecondaryButton from "../../../Common/components/SecondaryButton";
import strings from '../../i18n/strings.json';
import { HeadeMainDiv, StateName, Date, DateHeading, CasesButton} from './styledComponent';

class HeaderComponent extends Component {
    render() {
        const { onClickDaily, onClickCumulative } = this.props;
        return (
            <HeadeMainDiv>
                <StateName>Andhra Pradesh</StateName>
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



