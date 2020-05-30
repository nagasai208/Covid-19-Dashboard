import { observable, action } from "mobx";
import { API_INITIAL, API_FETCHING, API_SUCCESS } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise"
import { setAccessToken } from "../../utils/StorageUtils";


class AuthenticationStore {
    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIError
    @observable userName
    @observable password
    @observable userNameErrorMessage
    @observable passwordErrorMessage
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
        this.userName = '';
        this.password = '';
        this.passwordErrorMessage = '';
        this.userNameErrorMessage = '';
    }
    @action.bound
    clearStore() {
        this.init()
    }
    @action.bound
    setUserSignInAPIResponse(response) {
        response.map(eachResponse => {
            if (this.userName === eachResponse.userName) {
                if (this.password === eachResponse.password) {
                    setAccessToken(1)
                }
                else {
                    this.userNameErrorMessage = '';
                    this.passwordErrorMessage = 'invalid Password'
                }
            }
            else {
                this.passwordErrorMessage = '';
                this.userNameErrorMessage = 'invalid username';
            }
        })
       
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
    requestData() {
        this.requestObject = {
            userName:this.userName,password:this.password
        }
    }

    @action.bound
    userLogin() {
        this.requestData();
        const usersPromise = this.authAPIService.loginAPI(this.requestObject)
        let promise = new Promise(function (resolve) {
            setTimeout(() => resolve(usersPromise), 1000);
        });
        this.setGetUserSignInAPIStatus(API_FETCHING)
        return promise.then(response => {
            this.setGetUserSignInAPIStatus(API_SUCCESS)
            this.setUserSignInAPIResponse(response)
        })
    }
   
}


export {
    AuthenticationStore
}