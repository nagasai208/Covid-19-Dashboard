import React, { Component } from 'react'
import { observer } from "mobx-react"
import { action, toJS } from "mobx"
import strings from '../../i18n/strings.json';
import { TableTag, TableMainData, TabledRow, TabledHeading, TabledData } from './styledComponents';
@observer
class TableData extends Component {
    @action.bound
    SortedData(event) {
        const { covid19StateStore } = this.props;
        covid19StateStore.sortedData()
        }
    @action.bound
    renderList(item,index) {
        return (
            <TabledRow key={Math.random()} index={index}>
                <TabledData >{item.districtName}</TabledData>
                <TabledData>{item.totalCases}</TabledData>
                <TabledData>{item.activeCases}</TabledData>
                <TabledData>{item.totalRecoveredCases}</TabledData>
                <TabledData>{item.totalDeaths}</TabledData>
            </TabledRow>
        )
    }
    render() {
        const { totalDistictsData } = this.props.covid19StateStore;
        return (
            <TableMainData>
                <TableTag>
                    <TabledRow>
                        <TabledHeading id="districtName" onClick={this.SortedData}>{strings.districtName}</TabledHeading>
                        <TabledHeading id='2' onClick={this.SortedData}>{strings.confirmed}</TabledHeading>
                        <TabledHeading id='3' onClick={this.SortedData}>{strings.active}</TabledHeading>
                        <TabledHeading id='4' onClick={this.SortedData}>{strings.recovered}</TabledHeading>
                        <TabledHeading id='5' onClick={this.SortedData}>{strings.deaths}</TabledHeading>
                    </TabledRow>

                    {
                        totalDistictsData !== undefined &&
                        totalDistictsData.map((item,index) => {
                            return this.renderList(item,index)
                        })
                    }
                </TableTag>
            </TableMainData>
        )
    }
}

export { TableData }
























