import React, { Component } from 'react'
import { observer } from "mobx-react"
import ConfirmedCasesGraph from '../../../Common/components/VerticalGraph/VerticalGraph';
import strings from '../../i18n/strings.json';
import { ConfirmedCasesDiv, GraphHeading } from './styledComponents';
import Covid19StateStore from "../../stores/Covid19StateStore";

type ConfirmedCasesProps = {
    sortedDistrictGraph:any
    regionType:string
}
@observer
class ConfirmedCasesGraphComponent extends Component <ConfirmedCasesProps>{
    render() {
        const { sortedDistrictGraph, regionType } = this.props;
        return (
            <ConfirmedCasesDiv>
                <GraphHeading>{strings.distictWiseReport}</GraphHeading>
                {
                    regionType === 'mandals' ? <ConfirmedCasesGraph positiveCasesGraph={sortedDistrictGraph} name='mandalName' />:
                        <ConfirmedCasesGraph positiveCasesGraph={sortedDistrictGraph} name='districtName' />
                }
                    
            </ConfirmedCasesDiv>
        )
    }
}

export { ConfirmedCasesGraphComponent }
