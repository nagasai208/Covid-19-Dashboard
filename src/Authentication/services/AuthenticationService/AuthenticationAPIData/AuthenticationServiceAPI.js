import { create } from "apisauce";
import { networkCallWithApisauce } from "../../../utils/APIUtils";
import { apiMethods } from "../../../constants/APIConstants";
// import { baseUrl } from '../../baseUrl';
import { endPoint } from '../../endPoints';
import { baseUrl } from "../../../../Common/service/baseUrl";
class AuthenticationService {
    api
    constructor() {
        this.api = create({ baseURL: baseUrl });
    }
    loginAPI(requestObject) {
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