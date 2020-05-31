import React, { Component } from 'react'
import { observer } from "mobx-react";
import CumulativeGraph from "../../../Common/components/CumulativeGraph/CumulativeGraph";
import strings from '../../i18n/strings.json';
import { CumulativeDataGraphsDiv, GraphsHeading, CumulatiGraphMainDiv } from './styledComponents';
@observer
class CumulativeDataComponent extends Component {
    render() {
        const { cumulativeDistrictData } = this.props.covid19StateStore;
        return (
            <CumulatiGraphMainDiv>
                <CumulativeDataGraphsDiv>
                    <GraphsHeading>{strings.cumulativeReport}</GraphsHeading>
                    {

                        <CumulativeGraph cumulativeDistrictData={cumulativeDistrictData} />
                    }

                </CumulativeDataGraphsDiv>
                <CumulativeDataGraphsDiv>
                    <GraphsHeading>{strings.cumulativeConfirmCases}</GraphsHeading>
                    {

                        <CumulativeGraph cumulativeDistrictData={cumulativeDistrictData} />
                    }
                </CumulativeDataGraphsDiv>
            </CumulatiGraphMainDiv>
        )
    }
}

export { CumulativeDataComponent }
