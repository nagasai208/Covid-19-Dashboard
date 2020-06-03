import React from 'react';
import { observable } from "mobx";

class StateDailyReportModel {
    @observable totalCases
    @observable ConfirmedCases
    @observable stateName
    @observable districts = []
    @observable totalRecoveredCases
    @observable activeCases
    @observable totalDeaths
    constructor(props) {
        this.totalDeaths = props.totalDeaths;
        this.activeCases = props.activeCases;
        this.totalRecoveredCases = props.totalRecoveredCases;
        this.stateName = props.stateName;
        this.ConfirmedCases = props.ConfirmedCases;
        this.totalConfirmedCases = props.totalCases;
        this.districts = props.districts;
    }

}


export { StateDailyReportModel };