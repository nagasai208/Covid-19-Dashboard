import React, { Component } from 'react'
import { observer } from "mobx-react"
import ConfirmedCasesGraph from '../../../Common/components/VerticalGraph/VerticalGraph';
import strings from '../../i18n/strings.json';
import { ConfirmedCasesDiv, GraphHeading } from './styledComponents';
@observer
class ConfirmedCasesGraphComponent extends Component {
    render() {
        const { sortedDistrictGraph, regionType } = this.props.covid19StateStore;
        return (
            <ConfirmedCasesDiv>
                <GraphHeading>{strings.distictWiseReport}</GraphHeading>
                {
                    regionType === 'mandals' ? <ConfirmedCasesGraph positiveCasesGraph={sortedDistrictGraph} name='mandal_name' />:
                        <ConfirmedCasesGraph positiveCasesGraph={sortedDistrictGraph} name='district_name' />
                }
                    
            </ConfirmedCasesDiv>
        )
    }
}

export { ConfirmedCasesGraphComponent }
