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
        expect(covid19Store.getCovid19StateAPIStatus).toBe(API_INITIAL);
        expect(covid19Store.getCovid19StateAPIError).toBe(null);
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
        covid19Store.stateWidReport(onSuccess, onFailure);
        expect(covid19Store.getCovid19CasesAPIStatus).toBeUndefined()
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

        await covid19Store.stateWidReport(onSuccess, onFailure);
        expect(covid19Store.getCovid19CasesAPIStatus).toBeUndefined()
    });



    it("should test Covid19 failure state", async () => {
        const mockFailurePromise = new Promise(function (resolve, reject) {
            reject(new Error("error"));
        });

        const mockStatenAPI = jest.fn();
        mockStatenAPI.mockReturnValue(mockFailurePromise);
        covid19API.getStateWideAPI = mockStatenAPI;
        covid19Store = new Covid19StateStore(covid19API);
        await covid19Store.stateWidReport();
        expect(covid19Store.getCovid19CasesAPIStatus).toBeUndefined();
        expect(covid19Store.getCovid19CasesAPIError).toBeUndefined();
    });


    it("should test Covid19 failure state", async () => {
        const mockFailurePromise = new Promise(function (resolve, reject) {
            reject(new Error("error"));
        });

        const mockStatenAPI = jest.fn();
        mockStatenAPI.mockReturnValue(mockFailurePromise);
        covid19API.getStateWideDailyCumulativeAPI = mockStatenAPI;
        covid19Store = new Covid19StateStore(covid19API);
        await covid19Store.stateWidedDailyCumulativeReport();
        expect(covid19Store.getCovid19StateCumulativeAPIStatus).toBe(API_FAILED)
        expect(covid19Store.getCovid19StateCumulativeAPIError).toBe('error')
    });

    it("should test Covid19 failure state", async () => {
        const mockFailurePromise = new Promise(function (resolve, reject) {
            reject(new Error("error"));
        });

        const mockStatenAPI = jest.fn();
        mockStatenAPI.mockReturnValue(mockFailurePromise);
        covid19API.getDistrictsWideAnalysisAPI = mockStatenAPI;
        covid19Store = new Covid19StateStore(covid19API);
        await covid19Store.districtWideDataAnalysis();
        expect(covid19Store.getCovid19DistrictWiseAnalysisAPIStatus).toBe(API_FAILED)
        expect(covid19Store.getCovid19DistrictWiseAnalysisAPIError).toBe('error')
    });


    it("should test Covid19 failure state", async () => {
        const mockFailurePromise = new Promise(function (resolve, reject) {
            reject(new Error("error"));
        });

        const mockStatenAPI = jest.fn();
        mockStatenAPI.mockReturnValue(mockFailurePromise);
        covid19API.getStatewideDailyReport = mockStatenAPI;
        covid19Store = new Covid19StateStore(covid19API);
        await covid19Store.stateWidedDailyReport();
        expect(covid19Store.getCovid19StateDailyAPIStatus).toBe(API_FAILED)
        expect(covid19Store.getCovid19StateDailyAPIError).toBe('error')
    });

    it("should test Covid19 failure state", async () => {
        const mockFailurePromise = new Promise(function (resolve, reject) {
            reject(new Error("error"));
        });

        const mockStatenAPI = jest.fn();
        mockStatenAPI.mockReturnValue(mockFailurePromise);
        covid19API.getStateWideCumulativeReport = mockStatenAPI;
        covid19Store = new Covid19StateStore(covid19API);
        await covid19Store.stateWideCumulativeReport();
        expect(covid19Store.getCovid19DistrictWiseAnalysisAPIStatus).toBe(API_FAILED)
        expect(covid19Store.getCovid19DistrictWiseAnalysisAPIError).toBe('error')
    });


    it("should test Covid19 failure state", async () => {
        const mockFailurePromise = new Promise(function (resolve, reject) {
            reject(new Error("error"));
        });

        const mockStatenAPI = jest.fn();
        mockStatenAPI.mockReturnValue(mockFailurePromise);
        covid19API.getStateDailyReport = mockStatenAPI;
        covid19Store = new Covid19StateStore(covid19API);
        await covid19Store.stateDailyReport();
        expect(covid19Store.getCovid19StateDailyAPIStatus).toBe(API_FAILED)
        expect(covid19Store.getCovid19StateDailyAPIError).toBe('error')
    });
    it("should test Covid19 failure state", async () => {
        const mockFailurePromise = new Promise(function (resolve, reject) {
            reject(new Error("error"));
        });

        const mockStatenAPI = jest.fn();
        mockStatenAPI.mockReturnValue(mockFailurePromise);
        covid19API.getDistrictWideAPI = mockStatenAPI;
        covid19Store = new Covid19StateStore(covid19API);
        await covid19Store.districtWidReport();
        expect(covid19Store.getCovid19StateAPIStatus).toBe(API_FAILED)
        expect(covid19Store.getCovid19StateAPIError).toBe('error')
    });
    it("should test Covid19 failure state", async () => {
        const mockFailurePromise = new Promise(function (resolve, reject) {
            reject(new Error("error"));
        });

        const mockStatenAPI = jest.fn();
        mockStatenAPI.mockReturnValue(mockFailurePromise);
        covid19API.getDistrictWideCumulativeAPI = mockStatenAPI;
        covid19Store = new Covid19StateStore(covid19API);
        await covid19Store.districtWideCumulativeReport();
        expect(covid19Store.getCovid19DistrictCumulativeAPIStatus).toBe(API_FAILED)
        expect(covid19Store.getCovid19DistrictCumulativeAPIError).toBe('error')
    });
    it("should test Covid19 failure state", async () => {
        const mockFailurePromise = new Promise(function (resolve, reject) {
            reject(new Error("error"));
        });

        const mockStatenAPI = jest.fn();
        mockStatenAPI.mockReturnValue(mockFailurePromise);
        covid19API.getDistrictWideDailyCumulativeAPI = mockStatenAPI;
        covid19Store = new Covid19StateStore(covid19API);
        await covid19Store.districtWideDailyCumulativeReport();
        expect(covid19Store.getCovid19DistrictDailyAPIStatus).toBe(API_FAILED)
        expect(covid19Store.getCovid19DistrictDailyAPIError).toBe('error')
    });


    it("should test Covid19 failure state", async () => {
        const mockFailurePromise = new Promise(function (resolve, reject) {
            reject(new Error("error"));
        });

        const mockStatenAPI = jest.fn();
        mockStatenAPI.mockReturnValue(mockFailurePromise);
        covid19API.getDistrictWideDailyAPI = mockStatenAPI;
        covid19Store = new Covid19StateStore(covid19API);
        await covid19Store.districtWideDailyReport();
        expect(covid19Store.getCovid19DistrictDailyAPIStatus).toBe(API_FAILED)
        expect(covid19Store.getCovid19DistrictDailyAPIError).toBe('error')
    });
    it("should test Covid19 failure state", async () => {
        const mockFailurePromise = new Promise(function (resolve, reject) {
            reject(new Error("error"));
        });

        const mockStatenAPI = jest.fn();
        mockStatenAPI.mockReturnValue(mockFailurePromise);
        covid19API.getDistrictDailyAPI = mockStatenAPI;
        covid19Store = new Covid19StateStore(covid19API);
        await covid19Store.districtDailyReport();
        expect(covid19Store.getCovid19DistrictDailyAPIStatus).toBe(API_FAILED)
        expect(covid19Store.getCovid19DistrictDailyAPIError).toBe('error')
    });

    it("should test stateTotalReport", async () => {
        const mockProductPromise = Promise.resolve(stateWideData);
        const mockProductList = jest.fn();
        mockProductList.mockReturnValue(mockProductPromise);
        covid19API.getStateWideAPI = mockProductList;
        await covid19Store.stateWidReport();
        expect(covid19Store.stateTotalReport.length).toBeUndefined()
    });


    it("should test stateTotalReport", async () => {
        const mockProductPromise = Promise.resolve(stateWideData);
        const mockProductList = jest.fn();
        mockProductList.mockReturnValue(mockProductPromise);
        covid19API.getStateWideDailyCumulativeAPI = mockProductList;
        await covid19Store.stateWidedDailyCumulativeReport();
        expect(covid19Store.cumulativeReport.length).toBeUndefined()
    });


    it("should test stateTotalReport", async () => {
        const mockProductPromise = Promise.resolve(stateWideData);
        const mockProductList = jest.fn();
        mockProductList.mockReturnValue(mockProductPromise);
        covid19API.getStateWideCumulativeReport = mockProductList;
        await covid19Store.stateWideCumulativeReport();
        expect(covid19Store.cumulativeTotalReport.length).toBeUndefined()
    });



    it("should test stateTotalReport", async () => {
        const mockProductPromise = Promise.resolve(stateWideData);
        const mockProductList = jest.fn();
        mockProductList.mockReturnValue(mockProductPromise);
        covid19API.getStatewideDailyReport = mockProductList;
        await covid19Store.stateWidedDailyReport();
        expect(covid19Store.cumulativeTotalReport.length).toBe(0)
    });



    it("should test stateTotalReport", async () => {
        const mockProductPromise = Promise.resolve(stateWideData);
        const mockProductList = jest.fn();
        mockProductList.mockReturnValue(mockProductPromise);
        covid19API.getStateDailyReport = mockProductList;
        await covid19Store.stateDailyReport();
        expect(covid19Store.dailyReport.length).toBe(0)
    });



    it("should test stateTotalReport", async () => {
        const mockProductPromise = Promise.resolve(stateWideData);
        const mockProductList = jest.fn();
        mockProductList.mockReturnValue(mockProductPromise);
        covid19API.getStateWideCumulativeReport = mockProductList;
        await covid19Store.stateWideCumulativeReport();
        expect(covid19Store.stateTotalReport.length).toBe(0)
    });
    it("should test stateTotalReport", async () => {
        const mockProductPromise = Promise.resolve(stateWideData);
        const mockProductList = jest.fn();
        mockProductList.mockReturnValue(mockProductPromise);
        covid19API.getDistrictWideAPI = mockProductList;
        await covid19Store.districtWidReport();
        expect(covid19Store.stateTotalReport.length).toBeUndefined()
    });


    it("should test stateTotalReport", async () => {
        const mockProductPromise = Promise.resolve(stateWideData);
        const mockProductList = jest.fn();
        mockProductList.mockReturnValue(mockProductPromise);
        covid19API.getDistrictsWideAnalysisAPI = mockProductList;
        await covid19Store.districtWideDataAnalysis();
        expect(covid19Store.districtWiseAnalysis.length).toBeUndefined()
    });


    it("should test stateTotalReport", async () => {
        const mockProductPromise = Promise.resolve(stateWideData);
        const mockProductList = jest.fn();
        mockProductList.mockReturnValue(mockProductPromise);
        covid19API.getDistrictWideDailyCumulativeAPI = mockProductList;
        await covid19Store.districtWideDailyCumulativeReport();
        expect(covid19Store.cumulativeReport.length).toBe(0)
    });
    it("should test stateTotalReport", async () => {
        const mockProductPromise = Promise.resolve(stateWideData);
        const mockProductList = jest.fn();
        mockProductList.mockReturnValue(mockProductPromise);
        covid19API.getDistrictWideDailyAPI = mockProductList;
        await covid19Store.districtWideDailyReport();
        expect(covid19Store.cumulativeTotalReport.length).toBe(0)
    });

    it("should test stateTotalReport", async () => {
        const mockProductPromise = Promise.resolve(stateWideData);
        const mockProductList = jest.fn();
        mockProductList.mockReturnValue(mockProductPromise);
        covid19API.getDistrictWideCumulativeAPI = mockProductList;
        await covid19Store.districtWideCumulativeReport();
        expect(covid19Store.cumulativeTotalReport.length).toBe(0)
    });


    it("should test stateTotalReport", async () => {
        const mockProductPromise = Promise.resolve(stateWideData);
        const mockProductList = jest.fn();
        mockProductList.mockReturnValue(mockProductPromise);
        covid19API.getDistrictDailyAPI = mockProductList;
        await covid19Store.districtDailyReport();
        expect(covid19Store.dailyReport.length).toBeUndefined()
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
    it('Clear Store ', () => {
        covid19Store.clearStore();
        expect(covid19Store.getCovid19StateAPIStatus).toBe(API_INITIAL);
        const mockIn = jest.fn();
        covid19Store.init = mockIn;
        covid19Store.clearStore();
        expect(mockIn).toBeCalled()
    })


    it('state ', () => {
        covid19Store.totalDistictsData;
        expect(covid19Store.stateTotalReport.length).toBe(0)
    })
    it('state ', () => {
        covid19Store.totalMandals;
        expect(covid19Store.stateTotalReport.length).toBe(0)
    })
    it('state ', () => {
        covid19Store.totalMandals;
        expect(covid19Store.stateTotalReport.length).toBe(0)
    })



})


