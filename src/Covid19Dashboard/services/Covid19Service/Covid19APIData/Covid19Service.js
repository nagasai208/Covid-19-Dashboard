import { create } from "apisauce";
import { apiMethods } from "../../../../Common/constants/APIConstants";
import { format } from 'date-fns';
import { networkCallWithApisauceWithToken } from "../../../../Authentication/utils/APIUtils";
import { getAuthorizationHeaders } from "@ib/api";
import { getAccessToken } from "../../../../Authentication/utils/StorageUtils";
import { baseUrl } from "../../../../Common/service/baseUrl";
class Covid19Service {
    api
    constructor() {
        this.api = create({ baseURL: baseUrl, headers: getAuthorizationHeaders(getAccessToken()) });
    }
    getStateWideAPI(date) {
        return networkCallWithApisauceWithToken(
            this.api,
            `/state/cumulative/v1?till_date=${format((date), 'yyyy-MM-dd')}`,
            {},
            apiMethods.get
        )
    }
    getStateWideDailyCumulativeAPI() {
        return networkCallWithApisauceWithToken(
            this.api,
            '/state/daily_cumulative_report/v1',
            {},
            apiMethods.get
        )
    }


    getStateWideCumulativeReport() {
        return networkCallWithApisauceWithToken(
            this.api,
            '/state/districts/daily_cumulative_report/v1',
            {},
            apiMethods.get
        )

    }
    getStatewideDailyReport() {
        return networkCallWithApisauceWithToken(
            this.api,
            '/state/daily_cases/v1',
            {},
            apiMethods.get
        )
    }
    getStateDailyReport(date) {
        return networkCallWithApisauceWithToken(
            this.api,
            `/state/v1/?date=${format((date), 'yyyy-MM-dd')}`,
            {},
            apiMethods.get
        )
    }

    getDistrictWideAPI(date, id) {
        return networkCallWithApisauceWithToken(
            this.api,
            `/state/districts/${id}/cumulative/v1?till_date=${format((date), 'yyyy-MM-dd')}`,
            {},
            apiMethods.get
        )
    }

    getDistrictWideCumulativeAPI(id) {
        return networkCallWithApisauceWithToken(
            this.api,
            `/state/districts/${id}/daily_cumulative/v1`,
            {},
            apiMethods.get
        )
    }
    getDistrictWideDailyCumulativeAPI(id) {
        return networkCallWithApisauceWithToken(
            this.api,
            `/state/districts/${id}/mandals/daily_cumulative/v1`,
            {},
            apiMethods.get
        )
    }
    getDistrictWideDailyAPI(id) {
        return networkCallWithApisauceWithToken(
            this.api,
            `/state/districts/${id}/daily_cumulative/v1`,
            {},
            apiMethods.get
        )
    }
    getDistrictDailyAPI(id, date) {
        return networkCallWithApisauceWithToken(
            this.api,
            `/state/districts/${id}/v1?date=${format((date), 'yyyy-MM-dd')}`,
            {},
            apiMethods.get
        )
    }
    getDistrictsWideAnalysisAPI() {
        return networkCallWithApisauceWithToken(
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
