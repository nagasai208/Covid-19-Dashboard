import React, { Component } from 'react'
import { observer } from "mobx-react";
import CumulativeGraph from "../../../Common/components/CumulativeGraph/CumulativeGraph";
import strings from '../../i18n/strings.json';
import { CumulativeDataGraphsDiv, GraphsHeading, CumulatiGraphMainDiv } from './styledComponents';
import CumulativeAllDistrictGraph from "../../../Common/components/CumulativeAllDistrictGraph/CumulativeAllDistrictGraph";
import Covid19StateStore from "../../stores/Covid19StateStore";
type CumulativeDataComponentProps = {
    cumulativeReport:{dailyCumulative:Array<object>}
}
@observer
class CumulativeDataComponent extends Component <CumulativeDataComponentProps> {
    render() {
        const { cumulativeReport } = this.props;
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
                        <CumulativeAllDistrictGraph  />

                    }
                </CumulativeDataGraphsDiv>
            </CumulatiGraphMainDiv>
        )
    }
}

export { CumulativeDataComponent }
