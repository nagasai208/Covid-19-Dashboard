import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL,
} from "@ib/api-constants";
import AuthenticationService from "../../services/AuthenticationService/AuthenticationFixturesData/AuthenticationFixtureData";
import AuthenticationStore from "./";
import userDetails from '../../fixtures/LoginDetails.json';

describe("AuthStore Tests", () => {
    let authAPI;
    let authStore;

    beforeEach(() => {
        authAPI = new AuthenticationService();
        authStore = new AuthenticationStore(authAPI);
    });
    it("should test initialising auth store", () => {
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBe(null);
    });
    it("should test loginAPI data fetching state", () => {
        const onSuccess = jest.fn();
        const onFailure = jest.fn();

        const requestObject = {
            username: "test-user",
            password: "test-password",
        };

        const mockLoadingPromise = new Promise(function (resolve, reject) { });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        authAPI.loginAPI = mockSignInAPI;
        
        authStore.userLogin(requestObject, onSuccess, onFailure);

        expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING);
        expect(onSuccess).not.toBeCalled();
        expect(onFailure).not.toBeCalled();
        });
    it("should test initialising auth store", () => {
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBe(null);
    });
    it("should test loginAPI  state", async () => {
        const onSuccess = jest.fn();
        const onFailure = jest.fn();
        const requestObject = {
            username: "test-user",
            password: "test-password",
        };

        const mockFailurePromise = new Promise(function (resolve, reject) {
            reject(new Error("error"));
        });

        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockFailurePromise);
        authAPI.loginAPI = mockSignInAPI;
        authStore = new AuthenticationStore(authAPI);
        await authStore.userLogin(requestObject, onSuccess, onFailure);

        expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED);
        expect(authStore.getUserSignInAPIError).toBe("error");
        expect(onFailure).toBeCalled();
    });
});
