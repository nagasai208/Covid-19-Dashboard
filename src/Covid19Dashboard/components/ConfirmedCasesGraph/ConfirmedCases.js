import React, { Component } from 'react'
import { observer } from "mobx-react"
import ConfirmedCasesGraph from '../../../Common/components/VerticalGraph/VerticalGraph'
import { ConfirmedCasesDiv } from './styledComponents';
@observer
class ConfirmedCasesGraphComponent extends Component {
    render() {
        const { sortedGraph } = this.props.covid19StateStore;
        return (
            <ConfirmedCasesDiv>
                <ConfirmedCasesGraph positiveCasesGraph={sortedGraph} />
            </ConfirmedCasesDiv>
        )
    }
}

export { ConfirmedCasesGraphComponent }
