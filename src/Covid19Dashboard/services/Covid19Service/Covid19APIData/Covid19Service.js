import { create } from "apisauce";
import { apiMethods } from "../../../../constants/APIConstants";
import { networkCallWithApisauce } from "../../../../utils/APIUtils";
import casesData from '../../fixtures/covid19Data';



class Covid19Service {
    api
    constructor() {
        this.api = create({
            baseURL: 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/' })
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