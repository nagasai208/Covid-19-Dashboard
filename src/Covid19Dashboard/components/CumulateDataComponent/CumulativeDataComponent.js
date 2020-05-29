import React, { Component } from 'react'
import { observer } from "mobx-react";
import CumulativeDistrictGraph from "../../../Common/components/DistrictWiseConfirmedGraph/DistrictWiseConfirmedGraph";
import CumulativeGraph from "../../../Common/components/CumulativeGraph/CumulativeGraph";
import strings from '../../i18n/strings.json';
import { CumulativeDataGraphsDiv, GraphsHeading } from './styledComponent';
@observer
 class CumulativeDataComponent extends Component {
    render() {
        const { cumulativeDistrictData } = this.props.covid19StateStore;
        return (
            <div>
                <CumulativeDataGraphsDiv>
                    <GraphsHeading>{strings.cumulativeReport}</GraphsHeading>
                    {cumulativeDistrictData!==undefined &&

                        <CumulativeGraph cumulativeDistrictData={cumulativeDistrictData} />
                    }
                    
                </CumulativeDataGraphsDiv>
                <CumulativeDataGraphsDiv>
                    <GraphsHeading>{strings.cumulativeConfirmCases}</GraphsHeading>
                    {cumulativeDistrictData !== undefined &&

                        <CumulativeGraph cumulativeDistrictData={cumulativeDistrictData} />
                    }
                </CumulativeDataGraphsDiv>
            </div>
        )
    }
}

export { CumulativeDataComponent }
