import { create } from "apisauce";
import { apiMethods } from "../../../constants/APIConstants";
import { baseUrl } from '../../baseUrl';
import { compareAsc, format } from 'date-fns';
import { networkCallWithApisauce } from "../../../../Authentication/utils/APIUtils";
import { getAuthorizationHeaders } from "@ib/api";
import { getAccessToken } from "../../../../Authentication/utils/StorageUtils";

class Covid19Service {
    api
    constructor() {
        this.api = create({ baseURL: baseUrl, headers: getAuthorizationHeaders(getAccessToken()) });
    }
    getStateWideAPI(date) {
        return networkCallWithApisauce(
            this.api,
            `/state/cumulative/v1?till_date=${format((date), 'yyyy-MM-dd')}`,
            {},
            apiMethods.get
        )
    }
    getStateWideDailyCumulativeAPI() {
        return networkCallWithApisauce(
            this.api,
            '/state/daily_cumulative_report/v1',
            {},
            apiMethods.get
        )
    }


    getStateWideCumulativeReport() {
        return networkCallWithApisauce(
            this.api,
            '/state/districts/daily_cumulative_report/v1',
            {},
            apiMethods.get
        )

    }
    getStatewideDailyReport() {
        return networkCallWithApisauce(
            this.api,
            '/state/daily_cases/v1',
            {},
            apiMethods.get
        )
    }
    getDistrictWideCumulativeAPI() {
        return networkCallWithApisauce(
            this.api,
            'v1/products',
            {},
            apiMethods.get
        )
    }
    getDistrictWideDailyCumulativeAPI() {
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
    getDistrictsWideAnalysisAPI() {
        return networkCallWithApisauce(
            this.api,
            '/state/districts/daily_cumulative_report/v1',
            {},
            apiMethods.get
        )
    }
}
export {
    Covid19Service
}
