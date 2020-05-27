import { observable, action } from "mobx";
import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise"
import usersDataRespose from '../../fixtures/LoginDetails.json';
import { setAccessToken } from "../../utils/StorageUtils";


class AuthenticationStore {
    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIError
    requestObject;
    authAPIService

    constructor(authenticationService) {
        this.authAPIService = authenticationService;
        this.init()
    }
    @action.bound
    init() {
        this.getUserSignInAPIStatus = API_INITIAL;
        this.getUserSignInAPIError = null;
        this.requestObject = []
    }
    @action.bound
    clearStore() {
        this.init()
    }
    @action.bound
    setUserSignInAPIResponse(response) {
        console.log(usersDataRespose)
        setAccessToken(1)
    }

    @action.bound
    setGetUserSignInAPIError(authError) {
        this.getUserSignInAPIError = authError
    }

    @action.bound
    setGetUserSignInAPIStatus(apistatus) {
        this.getUserSignInAPIStatus = apistatus
    }
    @action.bound
    requestData(userName, password) {
        this.requestObject = [{
            name: userName, password: password
        }]

    }

    @action.bound
    userLoginin(userName, password) {
        this.requestData(userName, password)
        const usersPromise = this.authAPIService.loginApi(this.requestObject)
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetUserSignInAPIStatus, this.setUserSignInAPIResponse)
            .catch(this.setGetUserSignInAPIError)
    }
}


export {
    AuthenticationStore
}