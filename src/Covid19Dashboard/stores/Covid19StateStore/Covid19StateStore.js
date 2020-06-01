import { observable, action, computed } from "mobx";
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";

class Covid19StateStore {
    @observable getCovid19CasesAPIStatus
    @observable getCovid19CasesAPIError
    covid19Service
    @observable stateTotalReport
    @observable districtWiseAnalysis;
    @observable cumulativeTotalReport;
    @observable cumulativeReport;
    @observable dailyReport

    constructor(covid19Service) {
        this.covid19Service = covid19Service;
        this.init()
    }

    @action.bound
    init() {
        this.getCovid19CasesAPIStatus = API_INITIAL
        this.getCovid19CasesAPIError = null;
        this.stateTotalReport = [];
        this.dailyReport = [];
        this.cumulativeReport = [];
        this.cumulativeTotalReport = [];
        this.districtWiseAnalysis = [];
    }

    clearStore() {
        this.init()
    }


    @action.bound
    setGetStatewideReport(response) {
        this.stateTotalReport = response;
    }
    @action.bound
    setGetStatewideCumulativeReport(response) {
        this.cumulativeReport = response;
        this.cumulativeTotalReport = response;
    }

    @action.bound
    setGetStatewideDailyReport(response) {
        this.dailyReport = response;
    }

    @action.bound
    setGetDistrictwideCumulativeReport(response) {
        //this.cumulativeReport = response;
    }

    @action.bound
    setGetDistrictwideDailyReport(response) {
        //this.dailyReport = response;
    }
    @action.bound
    setGetCovid19APIResponseZonalWiseDistrictDataAnalysis(response) {
        this.districtWiseAnalysis = response;
    }





    @action.bound
    setGetCovid19APIStatus(status) {
        this.getCovid19CasesAPIStatus = status;
    }

    @action.bound
    setGetCovid19APIError(error) {
        this.getCovid19CasesAPIError = error

    }
    @computed
    get totalDistictsData() {
        return this.stateTotalReport.districts;
    } 
    @computed
    get sortedGraph() {
       return   this.stateTotalReport.districts.sort((firstValue, secondValue) => (firstValue.activeCases > secondValue.activeCases ? 1 : -1))

    }



    @action.bound
    stateWidedReport() {
        const usersPromise = this.covid19Service.getStateWideAPI()
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19APIStatus, this.setGetStatewideReport)
            .catch(this.getCovid19CasesAPIError)
    }

    stateWidedCumulativeReport() {
        const usersPromise = this.covid19Service.getStateWideCumulativeAPI()
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19APIStatus, this.setGetStatewideCumulativeReport)
            .catch(this.getCovid19CasesAPIError)
    }

    stateWidedDailyReport() {
        const usersPromise = this.covid19Service.getStatewideDailyReport()
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19APIStatus, this.setGetStatewideDailyReport)
            .catch(this.getCovid19CasesAPIError)
    }

    @action.bound
    districtWiseCumulativeReport() {
        const usersPromise = this.covid19Service.getDistrictWiseCumulativeAPI()
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19APIStatus, this.setGetDistrictwideCumulativeReport)
            .catch(this.getCovid19CasesAPIError)
    }
    @action.bound
    districtWiseDailyReport() {
        const usersPromise = this.covid19Service.getDistrictWideDailyAPI()
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19APIStatus, this.setGetDistrictwideDailyReport)
            .catch(this.getCovid19CasesAPIError)
    }

    @action.bound
    districtWiseDataAnalysis() {
        const usersPromise = this.covid19Service.getCasesZonalDistrictWiseDataAPI()
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19APIStatus, this.setGetCovid19APIResponseZonalWiseDistrictDataAnalysis)
            .catch(this.getCovid19CasesAPIError)

    }

}

export {
    Covid19StateStore
}