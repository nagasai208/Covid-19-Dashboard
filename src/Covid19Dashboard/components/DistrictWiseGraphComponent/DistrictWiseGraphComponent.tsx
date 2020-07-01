import React, { Component } from 'react'
import LoadingWrapperWithFailure from "../../../Common/components/common/LoadingWrapperWithFailure"
import { observer } from "mobx-react";
import DistrictWiseGraph from "../../../Common/components/DistrictWiseGraph/DistrictWiseGraph";
import { DistrictWiseZonalDiv, DistrictWiseZonalMainDiv, DistrictWiseMainGraph } from './styledComponents';
import strings from '../../i18n/strings.json';
import Covid19StateStore from "../../stores/Covid19StateStore";
type DistrictProps = {
    districtWiseAnalysis:any
    districts:string
    doNetworkCalls:()=>void
    data:any
    covid19StateStore:Covid19StateStore
   
    

}
@observer
class DistrictWiseGraphComponent extends Component <DistrictProps>{
    doNetworkCalls(){
        this.props.covid19StateStore.districtWideDataAnalysis()
    }
     
    renderList = observer(() => {
        const { districtWiseAnalysis } = this.props;
        return districtWiseAnalysis.districts.map((item) => {
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
