import { observable, action } from "mobx";
import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise"
import { setAccessToken, getAccessToken, clearUserSession } from "../../utils/StorageUtils";
import { getUserDisplayableErrorMessage } from "../../utils/APIUtils";


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
        this.getUserLogInAPIStatus = API_INITIAL;
        this.getUserLogInAPIError = null;
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
    setUserLogInAPIResponse(response) {
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
    setGetUserLogInAPIError(authError) {
        //nooo
        setAccessToken(1)
        this.accessToken = getAccessToken()
        // let errorMessage = getUserDisplayableErrorMessage(authError);
        // if (errorMessage === 'invalid username') {
        //     this.userNameErrorMessage = errorMessage;
        // }
        // else if (errorMessage === 'incorrect password') {
        //     this.passwordErrorMessage = errorMessage;
        // }
        this.getUserLogInAPIError = authError;

    }

    @action.bound
    setGetUserLogInAPIStatus(apiStatus) {
        this.getUserLogInAPIStatus = apiStatus
    }


    @action.bound
    userLogin(requestObject) {
        const usersPromise = this.authAPIService.loginAPI(requestObject)
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetUserLogInAPIStatus, this.setUserLogInAPIResponse)
            .catch(this.setGetUserLogInAPIError)
    }

}
export {
    AuthenticationStore
}