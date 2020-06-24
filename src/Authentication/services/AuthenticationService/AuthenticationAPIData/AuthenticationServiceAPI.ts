import { create } from "apisauce";
import { networkCallWithApisauce } from "../../../utils/APIUtils";
import { apiMethods } from "../../../constants/APIConstants";
// import { baseUrl } from '../../baseUrl';
import { endPoint } from '../../endPoints';
import { baseUrl } from "../../../../Common/service/baseUrl";
class AuthenticationService {
    api:any
    constructor() {
        this.api = create({ baseURL: baseUrl });
    }
    loginAPI(requestObject: { username: string; password: string; }) {
        return networkCallWithApisauce(
            this.api,
            endPoint,
            requestObject,
            apiMethods.post
        )
    }
}
export {
    AuthenticationService
}