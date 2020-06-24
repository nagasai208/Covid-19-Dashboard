import { observable, action } from "mobx";
import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise"
import { setAccessToken, getAccessToken, clearUserSession } from "../../utils/StorageUtils";
import { getUserDisplayableErrorMessage } from "../../utils/APIUtils";
import AuthenticationService from "../../services/AuthenticationService/AuthenticationAPIData";


class AuthenticationStore {
    @observable getUserLogInAPIStatus!:number
    @observable getUserLogInAPIError!:string|null
    @observable userName!:string
    @observable password!:string
    @observable userNameErrorMessage!:string
    @observable passwordErrorMessage!:string
    @observable accessToken!:any
    authAPIService!:AuthenticationService

    constructor(authenticationService:AuthenticationService) {
        this.authAPIService = authenticationService;
        this.init()
    }
    @action.bound
    init() {
        this.getUserLogInAPIStatus = API_INITIAL;
        this.getUserLogInAPIError = null;
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
    setUserLogInAPIResponse(response:any) {
        setAccessToken(response.access_token)
        this.accessToken = getAccessToken()
    }

    @action.bound
    signOut() {
        this.accessToken = clearUserSession();
        this.init();
    }
    @action.bound
    onChangeUserName(value:string) {
        this.userName = value;
        this.userNameErrorMessage = '';
    }

    @action.bound
    onChangePassword(value:string) {
        this.password = value;
        this.passwordErrorMessage = '';
    }

    @action.bound
    setGetUserLogInAPIError(authError: string | null) {
        //nooo
        setAccessToken(1)
        this.accessToken = getAccessToken()
        let errorMessage = getUserDisplayableErrorMessage(authError);
        if (errorMessage === 'invalid username') {
            this.userNameErrorMessage = errorMessage;
        }
        else if (errorMessage === 'incorrect password') {
            this.passwordErrorMessage = errorMessage;
        }
        this.getUserLogInAPIError = authError;

    }

    @action.bound
    setGetUserLogInAPIStatus(apiStatus: number) {
        this.getUserLogInAPIStatus = apiStatus
    }


    @action.bound
    userLogin(requestObject: { username: string; password: string; }) {
        const usersPromise = this.authAPIService.loginAPI(requestObject)
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetUserLogInAPIStatus, this.setUserLogInAPIResponse)
            .catch(this.setGetUserLogInAPIError)
    }

}
export {
    AuthenticationStore
}