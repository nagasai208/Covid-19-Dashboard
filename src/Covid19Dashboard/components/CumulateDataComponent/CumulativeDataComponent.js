import React, { Component } from 'react'
import CumulativeGraph from "../../../Common/components/CumulativeGraph/CumulativeGraph";
import strings from '../../i18n/strings.json';
import { CumulativeDataGraphsDiv, GraphsHeading } from './styledComponent';
import { observer } from "mobx-react";
import CumulativeDistrictGraph from "../../../Common/components/DistrictWiseConfirmedGraph/DistrictWiseConfirmedGraph";
@observer
 class CumulativeDataComponent extends Component {
    render() {
        const { totalDistictsData } = this.props.covid19StateStore;
        return (
            <div>
                <CumulativeDataGraphsDiv>
                    <GraphsHeading>{strings.cumulativeReport}</GraphsHeading>
                    <CumulativeGraph totalDistictsData={totalDistictsData} />
                </CumulativeDataGraphsDiv>
                <CumulativeDataGraphsDiv>
                    <GraphsHeading>{strings.cumulativeConfirmCases}</GraphsHeading>
                    <CumulativeDistrictGraph totalDistictsData={totalDistictsData} />
                </CumulativeDataGraphsDiv>
            </div>
        )
    }
}

export { CumulativeDataComponent }
