import { create } from "apisauce";
import { apiMethods } from "../../../constants/APIConstants";
import { networkCallWithApisauce } from "../../../utils/APIUtils";



class Covi19Service {
    api
    constructor() {
        this.api = create({ baseURL: 'https://sai.com' })
    }
    getCasesDataAPI(requestObject) {
        return networkCallWithApisauce(
            this.api,
            '',
            apiMethods.get
        )
    }
}
export {
    Covi19Service
}