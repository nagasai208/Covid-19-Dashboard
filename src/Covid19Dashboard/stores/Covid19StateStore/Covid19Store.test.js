import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL,
} from "@ib/api-constants";
import Covid19StateStore from ".";
import Covid19Service from '../../services/Covid19Service';
describe("CovidStore Tests", () => {
    let covid19API;
    let covid19Store;

    beforeEach(() => {
        covid19API = new Covid19Service();
        covid19Store = new Covid19StateStore(covid19API);
    });
    it("should test initialising Covid store", () => {
        expect(covid19Store.getCovid19CasesAPIStatus).toBe(API_INITIAL);
        expect(covid19Store.getCovid19CasesAPIError).toBe(null);
    });
    it("should test initialising Covid19Store values  ", () => {
        expect(covid19Store.stateTotalData.length).toBe(0);
    })
    it("should test initialising Covid19Store values  ", () => {
        expect(covid19Store.cumulativeDistrictData.length).toBe(0);
    })
    it("should test initialising Covid19Store values  ", () => {
        expect(covid19Store.zonalDistrictData.length).toBe(0);
    })
    it("should test  data fetching state", () => {
        const onSuccess = jest.fn();
        const onFailure = jest.fn();

        const requestObject = {
            username: "test-user",
            password: "test-password",
        };

        const mockLoadingPromise = new Promise(function (resolve, reject) { });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        covid19API.getCasesDataAPI = mockSignInAPI;
        covid19API.getCasesDataAPI();
        covid19Store.stateCasesApi(requestObject, onSuccess, onFailure);
        expect(covid19Store.getCovid19CasesAPIStatus).toBe(API_FETCHING);
        expect(onSuccess).not.toBeCalled();
        expect(onFailure).not.toBeCalled();
    });
})