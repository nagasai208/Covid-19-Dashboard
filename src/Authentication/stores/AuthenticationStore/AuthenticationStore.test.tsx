import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL,
} from "@ib/api-constants";
import AuthenticationService from "../../services/AuthenticationService/AuthenticationFixturesData";
import AuthenticationStore from ".";
import userDetails from '../../fixtures/LoginDetails.json';

describe("AuthStore Tests", () => {
    let authAPI;
    let authStore;

    beforeEach(() => {
        authAPI = new AuthenticationService();
        authStore = new AuthenticationStore(authAPI);
    });
    it("should test initialising auth store", () => {
        expect(authStore.getUserLogInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserLogInAPIError).toBe(null);
    });
    it("should test userSignInAPI data fetching state", () => {
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
        expect(authStore.getUserLogInAPIStatus).toBe(API_FETCHING);
        expect(onSuccess).not.toBeCalled();
        expect(onFailure).not.toBeCalled();
    });

    it("should test userSignInAPI success state", async () => {
        const onSuccess = jest.fn();
        const onFailure = jest.fn();

        const requestObject = {
            username: "test-user",
            password: "test-password",
        };

        const mockSuccessPromise = new Promise(function (resolve, reject) {
            resolve(userDetails);
        });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        authAPI.loginAPI = mockSignInAPI;

        await authStore.userLogin(requestObject, onSuccess, onFailure);
        expect(authStore.getUserLogInAPIStatus).toBe(API_SUCCESS);

    });

    it("should test userSignInAPI failure state", async () => {
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

        expect(authStore.getUserLogInAPIStatus).toBe(API_FAILED);
        expect(authStore.getUserLogInAPIError).toBe("error");
    });


    it("should test user sign-out", () => {
        authStore.signOut();
        expect(authStore.getUserLogInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserLogInAPIError).toBe(null);
    });
    it("should test user sign-out", () => {
        authStore.clearStore();
        expect(authStore.getUserLogInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserLogInAPIError).toBe(null);
    });
    it("should test user name", () => {
        let name = 'sai'
        authStore.onChangeUserName(name);
        expect(authStore.userName).toBe(name);
        expect(authStore.userNameErrorMessage.length).toBe(0);
    });
    it("should test user password", () => {
        let name = 'sai'
        authStore.onChangePassword(name);
        expect(authStore.password).toBe(name);
        expect(authStore.passwordErrorMessage.length).toBe(0);
    });






});
