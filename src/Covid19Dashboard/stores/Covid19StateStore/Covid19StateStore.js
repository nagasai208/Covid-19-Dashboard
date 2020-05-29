import { observable, action, computed } from "mobx";
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import casesData from '../../fixtures/covid19Data.json';
import cumulativeDistrictData from '../../fixtures/covid19DistrictData.json';

class Covid19StateStore {
    @observable getCovid19CasesAPIStatus
    @observable getCovid19CasesAPIError
    covid19Service
    @observable stateTotalData
    @observable startDate
    @observable cumulativeDistrictData

    constructor(covid19Service) {
        this.covid19Service = covid19Service;
        this.init()
    }

    @action.bound
    init() {
        this.getCovid19CasesAPIStatus = API_INITIAL
        this.getCovid19CasesAPIError = null;
        this.stateTotalData = [];
    }

    clearStore() {
     this.init()   
    }
    @action.bound
    setGetCovid19APIResponse(response) {
        this.stateTotalData = response;

    }
    @action.bound
    setGetCovid19APIResponseDistrict(response) {
        this.cumulativeDistrictData = cumulativeDistrictData;

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
        if (this.stateTotalData.districts !== undefined) {
            return this.stateTotalData.districts;
        }
    }
    @action.bound
    sortedData() {
        if (this.stateTotalData.districts !== undefined) {
            this.stateTotalData.districts = this.stateTotalData.districts.sort((firstValue, secondValue) => (firstValue.activeCases > secondValue.activeCases ? 1 : -1))

        }

    }
    @action.bound
    stateCasesApi() {
        const usersPromise = this.covid19Service.getCasesDataAPI()
        let promise = new Promise(function (resolve, reject) {
            setTimeout(() => resolve(usersPromise), 2000);
        });
        this.setGetCovid19APIStatus(API_FETCHING)
        promise.then(response => {
            this.setGetCovid19APIStatus(API_SUCCESS)
            this.setGetCovid19APIResponse(response)
        })
    }

    @action.bound
    districtCasesApi() {
        const usersPromise = this.covid19Service.getCasesDataAPI()
        let promise = new Promise(function (resolve, reject) {
            setTimeout(() => resolve(usersPromise), 1000);
        });
        this.setGetCovid19APIStatus(API_FETCHING)
        promise.then(response => {
            this.setGetCovid19APIStatus(API_SUCCESS)
            this.setGetCovid19APIResponseDistrict(response)
        })
    }

}

export {
    Covid19StateStore
}