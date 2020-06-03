import { create } from "apisauce";
import { networkCallWithApisauce } from "../../../../utils/APIUtils";
import { apiMethods } from "../../../constants/APIConstants";
class Covid19Service {
    api
    constructor() {
        this.api = create({ baseURL: baseUrl });
    }
    getStateWideAPI() {
        return networkCallWithApisauce(
            this.api,
            'v1/products',
            {},
            apiMethods.get
        )
    }
    getStateWideCumulativeAPI() {
        return networkCallWithApisauce(
            this.api,
            'v1/products',
            {},
            apiMethods.get
        )
    }
    getStatewideDailyReport() {
        return networkCallWithApisauce(
            this.api,
            'v1/products',
            {},
            apiMethods.get
        )
    }
    getDistrictWiseCumulativeAPI() {
        return networkCallWithApisauce(
            this.api,
            'v1/products',
            {},
            apiMethods.get
        )
    }
    getDistrictWideDailyAPI() {
        return networkCallWithApisauce(
            this.api,
            'v1/products',
            {},
            apiMethods.get
        )
    }
    getCasesZonalDistrictWiseDataAPI() {
        return networkCallWithApisauce(
            this.api,
            'v1/products',
            {},
            apiMethods.get
        )
    }
}
export {
    Covid19Service
}
