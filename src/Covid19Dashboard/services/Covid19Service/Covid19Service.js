import { create } from "apisauce";
import { apiMethods } from "../../../constants/APIConstants";
import { networkCallWithApisauce } from "../../../utils/APIUtils";
import casesData from '../../fixtures/covid19Data';



class Covi19Service {
    api
    constructor() {
        this.api = create({
            baseURL: 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/' })
    }
    getCasesDataAPI() {
        return networkCallWithApisauce(
            this.api,
            'v1/products',
            {},
            apiMethods.get
        )
    }
}
export {
    Covi19Service
}