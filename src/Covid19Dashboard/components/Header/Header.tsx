import React, { Component } from 'react';
import strings from '../../i18n/strings.json';
import { HeadeMainDiv, StateName, Date, DateHeading, CasesButton, ButtonCumulative, ButtonDaily } from './styledComponents';
import { observer } from "mobx-react";
import DatePickerComponent from "../DatePicker";
type HeadreProps = {
    onClickDaily:()=>void
    onClickCumulative:()=>void
    dailyDataGraphs:any
    districtName:string
    cumulativeGraphs:any
    color:any
}
@observer
class HeaderComponent extends Component <HeadreProps>{

    render() {
        const { onClickDaily, onClickCumulative, dailyDataGraphs, cumulativeGraphs, districtName } = this.props;
        return (
            <HeadeMainDiv>
                <StateName>{strings.stateName}/{districtName}</StateName>
                <Date><DateHeading>{strings.date}:</DateHeading> <DatePickerComponent  /></Date>
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



