import React, { Component } from 'react'
import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure"
import { observer } from "mobx-react";
import DistrictWiseGraph from "../../../Common/components/DistrictWiseGraph/DistrictWiseGraph";
import { DistrictWiseZonalDiv, DistrictWiseZonalMainDiv, DistrictWiseMainGraph } from './styledComponents';
import strings from '../../i18n/strings.json';
@observer
class DistrictWiseGraphComponent extends Component {
     
    renderList = observer(() => {
        const { covid19StateStore } = this.props;
        return covid19StateStore.districtWiseAnalysis.districts.map((item) => {
            return (
                <DistrictWiseZonalMainDiv>
                    <DistrictWiseZonalDiv>
                        <p>{`${strings.cumulativeConfirmCases}-${item.districtName}`}</p>
                        <DistrictWiseGraph data={item}/>
                    </DistrictWiseZonalDiv>
                </DistrictWiseZonalMainDiv>)

        })

    })
     render() {
         const { covid19StateStore } = this.props;
        return (
            <DistrictWiseMainGraph>
                <LoadingWrapperWithFailure
                    apiStatus={covid19StateStore.getCovid19DistrictWiseAnalysisAPIStatus}
                    apiError={covid19StateStore.getCovid19DistrictWiseAnalysisAPIError}
                    onRetryClick={this.doNetworkCalls}
                    renderSuccessUI={this.renderList}
                />
            </DistrictWiseMainGraph>
        )
    }
}

export { DistrictWiseGraphComponent }
