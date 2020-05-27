import React, { Component } from 'react'
import CumulativeGraph from "../../../Common/components/CumulativeGraph/CumulativeGraph";
import strings from '../../i18n/strings.json';
import { CumulativeDataGraphsDiv, GraphsHeading } from './styledComponent';

 class CumulativeDataComponent extends Component {
    render() {
        return (
            <div>
                <CumulativeDataGraphsDiv>
                    <GraphsHeading>{strings.cumulativeReport}</GraphsHeading>
                    <CumulativeGraph />
                </CumulativeDataGraphsDiv>
                <CumulativeDataGraphsDiv>
                    <GraphsHeading>{strings.cumulativeConfirmCases}</GraphsHeading>
                    <CumulativeGraph />
                </CumulativeDataGraphsDiv>
            </div>
        )
    }
}

export { CumulativeDataComponent }
