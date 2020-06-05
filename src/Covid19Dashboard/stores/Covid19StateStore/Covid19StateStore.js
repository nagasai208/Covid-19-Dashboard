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
    @observable regionType;
    @observable districtName;
    @observable districtId

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
        this.regionType = '';
        this.districtName = '';
        this.districtId = 0;
    }

    clearStore() {
        this.init()
    }



    @action.bound
    setGetStatewideReport(response) {
        this.stateTotalReport = response;
    }
    @action.bound
    setGetCovid19StateAPIStatus(status) {
        this.getCovid19StateAPIStatus = status;
    }

    @action.bound
    setGetCovid19StateAPIError(error) {
        this.getCovid19StateAPIError = error;

    }

    @action.bound
    setGetStateWideDailyCumulativeReportResponse(response) {
        this.cumulativeReport = response;
    }
    @action.bound
    setGetStateWideDailyCumulativeReportStatus(status) {
        this.getCovid19StateCumulativeAPIStatus = status;
    }

    @action.bound
    setGetStateWideDailyCumulativeReportError(error) {
        this.getCovid19StateCumulativeAPIError = error

    }


    @action.bound
    setGetStateWideCumulativeResponse(response) {
        this.cumulativeTotalReport = response;
    }

    @action.bound
    setGetStateWideCumulativeReportStatus(status) {
        this.getCovid19DistrictWiseAnalysisAPIStatus = status;
    }

    @action.bound
    setGetStateWideCumulativeAPIError(error) {
        this.getCovid19DistrictWiseAnalysisAPIError = error
    }


    @action.bound
    setGetStatewideDailyReport(response) {
        this.dailyReport = response;
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
    setGetDistrictwideReportResponse(response) {
        this.stateTotalReport = response;
    }
    @action.bound
    setGetDistrictAPIStatus(status) {
        this.getCovid19StateAPIStatus = status;
    }

    @action.bound
    setGetDistrictWideReportAPIError(error) {
        this.getCovid19StateAPIError = error;

    }


    @action.bound
    setGetDistrictwideCumulativeReportResponse(response) {
       
        this.cumulativeReport = response;
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
    setGetDistrictDailywideCumulativeReportResponse(response) {
        this.dailyReport = response;
    }
    @action.bound
    setGetDistrictDailyCumulativeAPIStatus(status) {
        this.getCovid19DistrictDailyAPIStatus = status;
    }

    @action.bound
    setGetDistrictDailyCumulativeAPIError(error) {
        this.getCovid19DistrictDailyAPIError = error

    }

    @action.bound
    setGetDistrictwideDailyReportResponse(response) {
        this.dailyReport = response;
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
    setGetCovid19APIResponseZonalWiseDistrictDataAnalysis(response) {
        this.districtWiseAnalysis = response;
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
    get sortedDistrictGraph() {
        if (this.regionType === 'mandals') {
            return this.stateTotalReport.mandals.sort((firstValue, secondValue) => (firstValue.activeCases > secondValue.activeCases ? -1 : 1))
        }
        return this.stateTotalReport.districts.sort((firstValue, secondValue) => (firstValue.activeCases > secondValue.activeCases ? -1 : 1))

    }
    @action.bound
    onClickDistrict(id, name) {
        this.districtId = id;
        this.districtName = name;
        this.districtWidReport(id);
        this.districtWideCumulativeReport(id)
        this.districtWideDailyReport(id)
        this.districtWideDailyCumulativeReport(id);
        this.districtWideDataAnalysis()
        this.regionType = 'mandals';
    }

    @action.bound
    onChangeDate(date) {
        if (this.districtName === '') {
            this.currentDate = date;
            this.districtName = '';
            this.regionType = '';
            this.stateWidedDailyCumulativeReport()
            this.stateWideCumulativeReport()
            this.stateWidedDailyReport();
            this.districtWideDataAnalysis();
            this.stateWidReport();  
        }
        else {
            this.districtWidReport(this.districtId);
            this.districtWideCumulativeReport(this.districtId)
            this.districtWideDailyReport(this.districtId)
            this.districtWideDailyCumulativeReport(this.districtId);
            this.districtWideDataAnalysis(this.districtId)
            this.regionType = 'mandals';
        }
        

    }
    @action.bound
    stateWidReport() {
        const usersPromise = this.covid19Service.getStateWideAPI(this.currentDate)
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19StateAPIStatus, this.setGetStatewideReport)
            .catch(this.setGetCovid19StateAPIError)
    }

    stateWidedDailyCumulativeReport() {
        const usersPromise = this.covid19Service.getStateWideDailyCumulativeAPI()
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetStateWideDailyCumulativeReportStatus, this.setGetStateWideDailyCumulativeReportResponse)
            .catch(this.setGetStateWideDailyCumulativeReportError)
    }

    @action.bound
    stateWideCumulativeReport() {
        const usersPromise = this.covid19Service.getStateWideCumulativeReport()
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetStateWideCumulativeReportStatus, this.setGetStateWideCumulativeResponse)
            .catch(this.setGetStateWideCumulativeAPIError)

    }

    stateWidedDailyReport() {
        const usersPromise = this.covid19Service.getStatewideDailyReport()
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19StateDailyAPIStatus, this.setGetStatewideDailyReport)
            .catch(this.setGetCovid19StateDailyAPIError)
    }


    @action.bound
    districtWidReport(id) {
        const usersPromise = this.covid19Service.getDistrictWideAPI(this.currentDate, id)
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetDistrictAPIStatus, this.setGetDistrictwideReportResponse)
            .catch(this.setGetDistrictWideReportAPIError)
    }

    @action.bound
    districtWideDataAnalysis() {
        const usersPromise = this.covid19Service.getDistrictsWideAnalysisAPI()
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19DistrictWiseAnalysisAPIStatus, this.setGetCovid19APIResponseZonalWiseDistrictDataAnalysis)
            .catch(this.setGetCovid19DistrictAnalysisAPIError)

    }



    @action.bound
    districtWideCumulativeReport(id) {
        const usersPromise = this.covid19Service.getDistrictWideCumulativeAPI(id)
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19DistrictCumulativeAPIStatus, this.setGetDistrictwideCumulativeReportResponse)
            .catch(this.setGetCovid19DistrictCumulativeAPIError)
    }


    @action.bound
    districtWideDailyCumulativeReport(id) {
        const usersPromise = this.covid19Service.getDistrictWideDailyCumulativeAPI(id)
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetDistrictDailyCumulativeAPIStatus, this.setGetDistrictDailywideCumulativeReportResponse)
            .catch(this.setGetDistrictDailyCumulativeAPIError)
    }
    @action.bound
    districtWideDailyReport(id) {
        const usersPromise = this.covid19Service.getDistrictWideDailyAPI(id)
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19DistrictDailyAPIStatus, this.setGetDistrictwideDailyReportResponse)
            .catch(this.setGetCovid19DistrictDailyAPIError)
    }




}

export {
    Covid19StateStore
}