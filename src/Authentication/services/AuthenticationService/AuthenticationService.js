import { create } from "apisauce"
import { networkCallWithApisauce } from "../../utils/APIUtils"
import { apiMethods } from "../../constants/APIConstants"


class AuthenticationService {
    api
    constructor() {
        this.api=create({baseURL:'https://sai.com'})
    }


    loginApi(requestObject) {
        return networkCallWithApisauce(
            this.api,
            '',
            { requestObject },
            apiMethods.post
        )
    }
}
export {
    AuthenticationService
}