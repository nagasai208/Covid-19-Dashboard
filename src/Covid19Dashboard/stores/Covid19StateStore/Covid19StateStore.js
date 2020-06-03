import { observable, action, computed } from "mobx";
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";

class Covid19StateStore {
    @observable getCovid19StateAPIStatus
    @observable getCovid19StateAPIError
    @observable getCovid19StateCumulativeAPIStatus
    @observable getCovid19StateCumulativeAPIError
    @observable getCovid19StateDailyAPIStatus
    @observable getCovid19StateDailyAPIError
    @observable getCovid19DistrictCumulativeAPIStatus
    @observable getCovid19DistrictCumulativeAPIError
    @observable getCovid19DistrictDailyAPIStatus
    @observable getCovid19DistrictDailyAPIError
    @observable getCovid19DistrictWiseAnalysisAPIStatus
    @observable getCovid19DistrictWiseAnalysisAPIError
    covid19Service
    @observable stateTotalReport
    @observable districtWiseAnalysis;
    @observable cumulativeTotalReport;
    @observable cumulativeReport;
    @observable dailyReport
    @observable currentDate;

    constructor(covid19Service) {
        this.covid19Service = covid19Service;
        this.init()
    }

    @action.bound
    init() {
        this.getCovid19StateAPIStatus = API_INITIAL
        this.getCovid19StateAPIError = null;
       
        this.getCovid19StateCumulativeAPIStatus = API_INITIAL
        this.getCovid19StateCumulativeAPIError = null;
       
        this.getCovid19StateDailyAPIStatus = API_INITIAL
        this.getCovid19StateDailyAPIError = null;
       
        this.getCovid19DistrictCumulativeAPIStatus = API_INITIAL
        this.getCovid19DistrictCumulativeAPIError = null;
       
        this.getCovid19DistrictDailyAPIStatus = API_INITIAL
        this.getCovid19DistrictDailyAPIError = null;
       
        this.getCovid19DistrictWiseAnalysisAPIStatus = API_INITIAL
        this.getCovid19DistrictWiseAnalysisAPIError = null;  
        
        
        this.stateTotalReport = [];
        this.dailyReport = [];
        this.cumulativeReport = [];
        this.cumulativeTotalReport = [];
        this.districtWiseAnalysis = [];
        this.currentDate = new Date();
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
    setGetCovid19StateAPIStatus(status) {
        this.getCovid19StateAPIStatus = status;
    }

    @action.bound
    setGetCovid19StateAPIError(error) {
        this.getCovid19StateAPIError = error

    }


    @action.bound
    setGetCovid19StateCumulativeAPIStatus(status) {
        this.getCovid19StateCumulativeAPIStatus = status;
    }

    @action.bound
    setGetCovid19StateCumulativeAPIError(error) {
        this.getCovid19StateCumulativeAPIError = error

    }


    @action.bound
    setGetCovid19StateDailyAPIStatus(status) {
        this.getCovid19StateDailyAPIStatus = status;
    }

    @action.bound
    setGetCovid19StateDailyAPIError(error) {
        this.getCovid19StateDailyAPIError = error

    }


    @action.bound
    setGetCovid19DistrictCumulativeAPIStatus(status) {
        this.getCovid19DistrictCumulativeAPIStatus = status;
    }

    @action.bound
    setGetCovid19DistrictCumulativeAPIError(error) {
        this.getCovid19DistrictCumulativeAPIError = error

    }



    @action.bound
    setGetCovid19DistrictDailyAPIStatus(status) {
        this.getCovid19DistrictDailyAPIStatus = status;
    }

    @action.bound
    setGetCovid19DistrictDailyAPIError(error) {
        this.getCovid19DistrictDailyAPIError = error

    }

    @action.bound
    setGetCovid19DistrictWiseAnalysisAPIStatus(status) {
        this.getCovid19DistrictWiseAnalysisAPIStatus = status;
    }

    @action.bound
    setGetCovid19DistrictAnalysisAPIError(error) {
        this.getCovid19DistrictWiseAnalysisAPIError = error

    }
    @computed
    get totalDistictsData() {
        return this.stateTotalReport.districts;
    }
    @computed
    get totalMandals() {
        return this.stateTotalReport.mandals;
    }
    
    @computed
    get sortedGraph() {
       return   this.stateTotalReport.districts.sort((firstValue, secondValue) => (firstValue.activeCases > secondValue.activeCases ? -1 : 1))

    }

    @computed
    get sortedMandalsGraph() {
        return this.stateTotalReport.mandals.sort((firstValue, secondValue) => (firstValue.activeCases > secondValue.activeCases ? 1 : -1))

    }

    @action.bound
    onChangeDate(date) {
        this.currentDate = date;
        this.stateWidedReport();
        
        }
    @action.bound
    stateWidedReport() {
        const usersPromise = this.covid19Service.getStateWideAPI()
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19StateAPIStatus, this.setGetStatewideReport)
            .catch(this.setGetCovid19StateAPIError)
    }

    stateWidedCumulativeReport() {
        const usersPromise = this.covid19Service.getStateWideCumulativeAPI()
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19StateCumulativeAPIStatus, this.setGetStatewideCumulativeReport)
            .catch(this.setGetCovid19StateCumulativeAPIError)
    }

    stateWidedDailyReport() {
        const usersPromise = this.covid19Service.getStatewideDailyReport()
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19StateDailyAPIStatus, this.setGetStatewideDailyReport)
            .catch(this.setGetCovid19StateDailyAPIError)
    }

    @action.bound
    districtWiseCumulativeReport() {
        const usersPromise = this.covid19Service.getDistrictWiseCumulativeAPI()
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19DistrictCumulativeAPIStatus, this.setGetDistrictwideCumulativeReport)
            .catch(this.setGetCovid19DistrictCumulativeAPIError)
    }
    @action.bound
    districtWiseDailyReport() {
        const usersPromise = this.covid19Service.getDistrictWideDailyAPI()
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19DistrictDailyAPIStatus, this.setGetDistrictwideDailyReport)
            .catch(this.setGetCovid19DistrictDailyAPIError)
    }

    @action.bound
    districtWiseDataAnalysis() {
        const usersPromise = this.covid19Service.getCasesZonalDistrictWiseDataAPI()
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19DistrictWiseAnalysisAPIStatus, this.setGetCovid19APIResponseZonalWiseDistrictDataAnalysis)
            .catch(this.setGetCovid19DistrictAnalysisAPIError)

    }

}

export {
    Covid19StateStore
}