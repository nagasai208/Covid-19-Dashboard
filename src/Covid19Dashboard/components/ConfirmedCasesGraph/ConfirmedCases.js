import React, { Component } from 'react'
import { observer } from "mobx-react"
import ConfirmedCasesGraph from '../../../Common/components/VerticalGraph/VerticalGraph'
import { ConfirmedCasesDiv } from './styledComponent';
@observer
class ConfirmedCasesGraphComponent extends Component {
    render() {
        const { totalDistictsData } = this.props.covid19StateStore;
        return (
            <ConfirmedCasesDiv>
                <ConfirmedCasesGraph totalDistictsData={totalDistictsData} />
            </ConfirmedCasesDiv>
        )
    }
}

export { ConfirmedCasesGraphComponent }
