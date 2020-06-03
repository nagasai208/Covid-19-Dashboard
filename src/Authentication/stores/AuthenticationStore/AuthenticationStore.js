import { observable, action } from "mobx";
import { API_INITIAL, API_FETCHING, API_SUCCESS } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise"
import { setAccessToken, getAccessToken, clearUserSession } from "../../utils/StorageUtils";


class AuthenticationStore {
    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIError
    @observable userName
    @observable password
    @observable userNameErrorMessage
    @observable passwordErrorMessage
    @observable accessToken;
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
        this.accessToken = getAccessToken()
    }
    @action.bound
    clearStore() {
        this.init()
    }
    @action.bound
    setUserSignInAPIResponse(response) {
        setAccessToken(response.access_token)
        this.accessToken = getAccessToken()
    }

    @action.bound
    signOut() {
        this.accessToken = clearUserSession();
        this.init();
    }
    @action.bound
    onChangeUserName(value) {
        this.userName = value;
        this.userNameErrorMessage = '';
    }

    @action.bound
    onChangePassword(value) {
        this.password = value;
        this.passwordErrorMessage = '';
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
    userLogin(requestObject) {
        const usersPromise = this.authAPIService.loginAPI(requestObject)
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetUserSignInAPIStatus, this.setUserSignInAPIResponse)
            .catch(this.setGetUserSignInAPIError)
    }

}
export {
    AuthenticationStore
}