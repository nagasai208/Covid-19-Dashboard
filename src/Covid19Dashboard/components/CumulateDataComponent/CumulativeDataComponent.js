import React, { Component } from 'react'
import { observer } from "mobx-react";
import CumulativeGraph from "../../../Common/components/CumulativeGraph/CumulativeGraph";
import strings from '../../i18n/strings.json';
import { CumulativeDataGraphsDiv, GraphsHeading, CumulatiGraphMainDiv } from './styledComponents';
@observer
class CumulativeDataComponent extends Component {
    render() {
        const { cumulativeReport,cumulativeTotalReport } = this.props.covid19StateStore;
        return (
            <CumulatiGraphMainDiv>
                <CumulativeDataGraphsDiv>
                    <GraphsHeading>{strings.cumulativeReport}</GraphsHeading>
                    {

                        <CumulativeGraph cumulativeReport={cumulativeReport} />
                    }

                </CumulativeDataGraphsDiv>
                <CumulativeDataGraphsDiv>
                    <GraphsHeading>{strings.cumulativeConfirmCases}</GraphsHeading>
                    {

                        <CumulativeGraph cumulativeReport={cumulativeTotalReport} />
                    }
                </CumulativeDataGraphsDiv>
            </CumulatiGraphMainDiv>
        )
    }
}

export { CumulativeDataComponent }
