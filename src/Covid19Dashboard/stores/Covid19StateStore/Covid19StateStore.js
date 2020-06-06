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
    @observable districtId;
    @observable daily;

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
        this.daily = 'false';
    }

    clearStore() {
        this.init()
    }



    @action.bound
    setGetStatewideReport(response) {
        let data = keysToCamel(response)
        this.stateTotalReport = data;

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
        let data = keysToCamel(response)
        this.cumulativeReport = data;
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
        let data = keysToCamel(response)
        this.cumulativeTotalReport = data;
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
        let data = keysToCamel(response)
        this.dailyReport = data;
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
    setGetStateDailyReportResponse(response) {
        let data = keysToCamel(response)
        this.stateTotalReport =data;
    }
    @action.bound
    setGetDailyAPIStatus(status) {
        this.getCovid19StateDailyAPIStatus = status;
    }

    @action.bound
    setGetStateDailyAPIError(error) {
        this.getCovid19StateDailyAPIError = error

    }
    @action.bound
    setGetDistrictwideReportResponse(response) {
        let data = keysToCamel(response)
        this.stateTotalReport = data;
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
        let data = keysToCamel(response)
        this.cumulativeReport = data;
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
        let data = keysToCamel(response)
        this.cumulativeTotalReport = data;
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
        let data = keysToCamel(response)
        this.dailyReport = data;
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
    setGetDistrictDailyReportResponse(response) {
        let data = keysToCamel(response)
        this.stateTotalReport = data;
    }
    @action.bound
    setGetDistrictDailyAPIStatus(status) {
        this.getCovid19DistrictDailyAPIStatus = status;
    }

    @action.bound
    setGetDistrictDailyAPIError(error) {
        this.getCovid19DistrictDailyAPIError = error;

    }

    @action.bound
    setGetCovid19APIResponseZonalWiseDistrictDataAnalysis(response) {
        let data = keysToCamel(response)
        this.districtWiseAnalysis = data;
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
        this.regionType = 'mandals';

        this.districtWidReport(id);
        this.districtWideCumulativeReport(id)
        this.districtWideDailyReport(id)
        this.districtWideDailyCumulativeReport(id);
        this.districtWideDataAnalysis()
        this.regionType = 'mandals';


    }

    @action.bound
    onChangeDate(date) {
        this.currentDate = date;
        if (this.districtName === '') {
            if (this.daily) {
                this.stateWidedDailyCumulativeReport()
                this.stateWideCumulativeReport()
                this.stateWidedDailyReport();
                this.districtWideDataAnalysis();
                this.stateDailyReport();
            }
            else {
                this.stateWidedDailyCumulativeReport()
                this.stateWideCumulativeReport()
                this.stateWidedDailyReport();
                this.districtWideDataAnalysis();
                this.stateWidReport();
            }

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

    stateDailyReport() {
        const usersPromise = this.covid19Service.getStateDailyReport(this.currentDate)
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetDailyAPIStatus, this.setGetStateDailyReportResponse)
            .catch(this.setGetStateDailyAPIError)
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

    @action.bound
    districtDailyReport(id) {
        const usersPromise = this.covid19Service.getDistrictDailyAPI(id, this.currentDate)
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetDistrictDailyAPIStatus, this.setGetDistrictDailyReportResponse)
            .catch(this.setGetDistrictDailyAPIError)
    }




}

export {
    Covid19StateStore
}



const toCamel = (changeCase) => {
    return changeCase.replace(/([-_][a-z])/ig, ($1) => {
        return $1.toUpperCase()
            .replace('-', '')
            .replace('_', '');
    });
};

const isArray = function (data) {
    return Array.isArray(data);
};

const isObject = function (value) {
    return value === Object(value) && !isArray(value) && typeof value !== 'function';
};

const keysToCamel = function (object) {
    if (isObject(object)) {
        const mainData = {};

        Object.keys(object)
            .forEach((eachValue) => {
                mainData[toCamel(eachValue)] = keysToCamel(object[eachValue]);
            });

        return mainData;
    } else if (isArray(object)) {
        return object.map((eachData) => {
            return keysToCamel(eachData);
        });
    }

    return object;
};
