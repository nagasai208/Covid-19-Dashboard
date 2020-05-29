import { observable, action } from "mobx";
import { API_INITIAL, API_FETCHING, API_SUCCESS } from "@ib/api-constants";
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

        let promise = new Promise(function (resolve, reject) {
            setTimeout(() => resolve(usersDataRespose), 1000);
        });
        this.setGetUserSignInAPIStatus(API_FETCHING)
        promise.then(response => {
            this.setGetUserSignInAPIStatus(API_SUCCESS)
            this.setUserSignInAPIResponse(response)
        })
    }
    //     this.requestData(userName, password)
    //     const usersPromise = this.authAPIService.loginApi(this.requestObject)
    //     return bindPromiseWithOnSuccess(usersPromise)
    //         .to(this.setGetUserSignInAPIStatus, this.setUserSignInAPIResponse)
    //         .catch(this.setGetUserSignInAPIError)
    // }
}


export {
    AuthenticationStore
}