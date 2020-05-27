import { observable, action } from "mobx";
import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";

class Covid19StateStore {
    @observable getCovid19CasesAPIStatus
    @observable getCovid19CasesAPIError
    covid19Service
    @observable stateData 
    @observable startDate

    constructor(covid19Service) {
        this.covid19Service = covid19Service;
        this.init()
    }

    @action.bound
    init() {
        this.getCovid19CasesAPIStatus = API_INITIAL
        this.getCovid19CasesAPIError = null;
        this.stateData = [];
    }
    @action.bound
    setGetCovid19APIResponse(response) {
        console.log(response)
        
    }
    @action.bound
    setGetCovid19APIStatus(status) {
        this.getCovid19CasesAPIStatus = status;
        
    }

    @action.bound
    setGetCovid19APIError(error) {
        this.getCovid19CasesAPIError = error
        
    }

    @action.bound
    stateCasesApi() {
        const usersPromise = this.covid19Service.getCasesDataAPI()
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetCovid19APIStatus, this.setGetCovid19APIResponse)
            .catch(this.setGetCovid19APIError)
    }
}

export {
    Covid19StateStore
}