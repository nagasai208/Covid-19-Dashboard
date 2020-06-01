import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL,
} from "@ib/api-constants";
import Covid19ServiceFixturesData from "../../services/Covid19Service/Covid19FixturesData/Covid19iService.fixtures";
import { Covid19StateStore } from "./Covid19StateStore";
import stateWideData from '../../fixtures/stateWideData.json';

describe("CovidStore Tests", () => {
    let covid19API;
    let covid19Store;

    beforeEach(() => {
        covid19API = new Covid19ServiceFixturesData();
        covid19Store = new Covid19StateStore(covid19API);
    });
    it("should test initialising Covid store", () => {
        expect(covid19Store.getCovid19CasesAPIStatus).toBe(API_INITIAL);
        expect(covid19Store.getCovid19CasesAPIError).toBe(null);
    });
    it("should test initialising Covid19Store values  ", () => {
        expect(covid19Store.stateTotalReport.length).toBe(0);
    })
    it("should test initialising Covid19Store values  ", () => {
        expect(covid19Store.cumulativeTotalReport.length).toBe(0);
    })
    it("should test initialising Covid19Store values  ", () => {
        expect(covid19Store.districtWiseAnalysis.length).toBe(0);
    })
    it("should test  data fetching state", () => {
        const onSuccess = jest.fn();
        const onFailure = jest.fn();
        const mockLoadingPromise = new Promise(function (resolve, reject) { });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        covid19API.getStateWideAPI = mockSignInAPI;
        covid19API.getStateWideAPI();
        covid19Store.stateWidedReport(onSuccess, onFailure);
        expect(covid19Store.getCovid19CasesAPIStatus).toBe(API_FETCHING);
        expect(onSuccess).not.toBeCalled();
        expect(onFailure).not.toBeCalled();
    });


    it("should test Covid19 success state", async () => {
        const onSuccess = jest.fn();
        const onFailure = jest.fn();

        const mockSuccessPromise = new Promise(function (resolve, reject) {
            resolve(stateWideData);
        });
        const mockStatenAPI = jest.fn();
        mockStatenAPI.mockReturnValue(mockSuccessPromise);
        covid19API.getStateWideAPI = mockStatenAPI;
        covid19API.getStateWideAPI();

        await covid19Store.stateWidedReport(onSuccess, onFailure);
        expect(covid19Store.getCovid19CasesAPIStatus).toBe(API_SUCCESS);
    });



    // it("should test Covid19 failure state", async () => {
    //     const mockFailurePromise = new Promise(function (resolve, reject) {
    //         reject(new Error("error"));
    //     });

    //     const mockStatenAPI = jest.fn();
    //     mockStatenAPI.mockReturnValue(mockFailurePromise);
    //     covid19API.getStateWideAPI = mockStatenAPI;
    //     covid19Store = new Covid19StateStore(covid19API);
    //     await covid19Store.stateWidedReport();
    //     expect(covid19Store.getCovid19CasesAPIStatus).toBe(API_FAILED);
    //     expect(covid19Store.getCovid19CasesAPIError).toBe("error");
    // });

    it("should test stateTotalReport", async () => {
        const mockProductPromise = Promise.resolve(stateWideData);
        const mockProductList = jest.fn();
        mockProductList.mockReturnValue(mockProductPromise);
        covid19API.getStateWideAPI = mockProductList;
        await covid19Store.stateWidedReport();
        expect(covid19Store.stateTotalReport.length).toBeUndefined()
    });

    it("should test initialising Covid19Store values  ", () => {
        expect(covid19Store.stateTotalReport.length).toBe(0);
    })
    it("should test initialising Covid19Store values  ", () => {
        expect(covid19Store.cumulativeTotalReport.length).toBe(0);
    })
    it("should test initialising Covid19Store values  ", () => {
        expect(covid19Store.districtWiseAnalysis.length).toBe(0);
    })


})


