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
    sortedData(value) {
        this.stateTotalData.districts = this.stateTotalData.districts.sort((firstValue, secondValue) => (firstValue.activeCases > secondValue.activeCases ? 1 : -1))

    }
    @action.bound
    stateCasesApi() {

        const usersPromise = this.covid19Service.getCasesDataAPI(this.requestObject)
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19APIStatus, this.setGetCovid19APIResponse)
            .catch(this.getCovid19CasesAPIError)
    }

    @action.bound
    districtCasesApi() {
        const usersPromise = this.covid19Service.getCasesDistrictDataAPI(this.requestObject)
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19APIStatus, this.setGetCovid19APIResponseDistrict)
            .catch(this.getCovid19CasesAPIError)
    }

    @action.bound
    zonalWiseDistrictData() {
        const usersPromise = this.covid19Service.getCasesDistrictDataAPI(this.requestObject)
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19APIStatus, this.setGetCovid19APIResponseZonalWiseDistrictData)
            .catch(this.getCovid19CasesAPIError)

    }

}

export {
    Covid19StateStore
}