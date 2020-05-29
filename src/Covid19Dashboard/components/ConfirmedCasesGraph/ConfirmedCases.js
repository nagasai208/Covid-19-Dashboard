import React, { Component } from 'react'
import ConfirmedCasesGraph from '../../../Common/components/VerticalGraph/VerticalGraph'
import { observer } from "mobx-react"
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
