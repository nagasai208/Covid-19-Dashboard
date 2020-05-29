import { observable, action, computed } from "mobx";
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import casesData from '../../fixtures/covid19Data.json';

class Covid19StateStore {
    @observable getCovid19CasesAPIStatus
    @observable getCovid19CasesAPIError
    covid19Service
    @observable stateTotalData
    @observable startDate

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
    @action.bound
    setGetCovid19APIResponse(response) {
        this.stateTotalData = response;
        console.log(this.stateTotalData.districts)
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
        return this.stateTotalData.districts
    }
    @action.bound
    stateCasesApi() {
        let promise = new Promise(function (resolve, reject) {
            setTimeout(() => resolve(casesData), 1000);
        });
        this.setGetCovid19APIStatus(API_FETCHING)
        promise.then(response => {
            this.setGetCovid19APIStatus(API_SUCCESS)
            this.setGetCovid19APIResponse(response)
        })
        //     const usersPromise = this.covid19Service.getCasesDataAPI()
        //     return bindPromiseWithOnSuccess(usersPromise)
        //         .to(this.setGetCovid19APIStatus, this.setGetCovid19APIResponse)
        //         .catch(this.setGetCovid19APIError)
    }
}

export {
    Covid19StateStore
}