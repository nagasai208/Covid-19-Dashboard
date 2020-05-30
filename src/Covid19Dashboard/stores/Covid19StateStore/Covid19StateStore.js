import { observable, action, computed } from "mobx";
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import cumulativeDistrictData from '../../fixtures/covid19DistrictData.json';
import covid19ZonalWiseData from '../../fixtures/covid19DistrictWiseZonalData';

class Covid19StateStore {
    @observable getCovid19CasesAPIStatus
    @observable getCovid19CasesAPIError
    covid19Service
    @observable stateTotalData
    @observable startDate
    @observable cumulativeDistrictData
    @observable zonalDistrictData

    constructor(covid19Service) {
        this.covid19Service = covid19Service;
        this.init()
    }

    @action.bound
    init() {
        this.getCovid19CasesAPIStatus = API_INITIAL
        this.getCovid19CasesAPIError = null;
        this.stateTotalData = [];
        this.cumulativeDistrictData = [];
        this.zonalDistrictData = [];
    }

    clearStore() {
        this.init()
    }
    @action.bound
    setGetCovid19APIResponse(response) {
       console.log(response)
        this.stateTotalData = response;

    }
    @action.bound
    setGetCovid19APIResponseZonalWiseDistrictData(response) {
        this.zonalDistrictData = covid19ZonalWiseData;

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
    async stateCasesApi() {
        const usersPromise = await this.covid19Service.getCasesDataAPI()
        let promise = new Promise(function (resolve, reject) {
            setTimeout(() => resolve(usersPromise), 2000);
        });
        this.setGetCovid19APIStatus(API_FETCHING)
        return promise.then(response => {
            this.setGetCovid19APIStatus(API_SUCCESS)
            this.setGetCovid19APIResponse(response)
        })
    }

    @action.bound
    async districtCasesApi() {
        const usersPromise = await this.covid19Service.getCasesDistrictDataAPI()
        let promise = new Promise(function (resolve, reject) {
            setTimeout(() => resolve(usersPromise), 1000);
        });
        this.setGetCovid19APIStatus(API_FETCHING)
        return promise.then(response => {
            this.setGetCovid19APIStatus(API_SUCCESS)
            this.setGetCovid19APIResponseDistrict(response)
        })
    }

    @action.bound
    async zonalWiseDistrictData() {
        const usersPromise = await this.covid19Service.getCasesZonalDistrictWiseDataAPI()
        let promise = new Promise(function (resolve, reject) {
            setTimeout(() => resolve(usersPromise), 1000);
        });
        this.setGetCovid19APIStatus(API_FETCHING)
        return promise.then(response => {
            this.setGetCovid19APIStatus(API_SUCCESS)
            this.setGetCovid19APIResponseZonalWiseDistrictData(response)
        })
    }

}

export {
    Covid19StateStore
}