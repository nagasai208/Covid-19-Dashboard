import React from "react";
import { render, waitFor } from "@testing-library/react";
import { withRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Provider } from "mobx-react";
import Covid19DashboardRoute from './DashBoardRoute'
import Covid19StateStore from "../../stores/Covid19StateStore";
import Covid19ServiceFixturesData from "../../services/Covid19Service/Covid19FixturesData/Covid19iService.fixtures";
import { ProtectedRoute } from "../../../Common/routes/ProtectedRoute/ProtectedRoute";
import AuthenticationService from "../../../Authentication/services/AuthenticationService/AuthenticationAPIData";
import AuthenticationStore from "../../../Authentication/stores/AuthenticationStore";
const LocationDisplay = withRouter(({ location }) => (
    <div data-testid="location-display">{location.pathname}</div>
));
describe("DashboardRoute Tests", () => {
    let covidAPI: Covid19ServiceFixturesData;
    let covidStore: Covid19StateStore;
    let authAPI: AuthenticationService;
    let authenticationStore: AuthenticationStore;
    beforeEach(() => {
        authAPI = new AuthenticationService()
        authenticationStore = new AuthenticationStore(authAPI);
        covidAPI = new Covid19ServiceFixturesData();
        covidStore = new Covid19StateStore(covidAPI);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it("should test the data loading state of covi19DashBoard Route ", () => {

        const {
            getByLabelText,
            findAllByText,
            debug,
            getByText } = render(
                <Provider covidStore={covidStore} authenticationStore={authenticationStore} >
                   <Covid19DashboardRoute />
                    </Provider>

            )
        const mockLoadingPromise = new Promise(() => { })
        const mockCovid19DataLoadingAPI = jest.fn()
        mockCovid19DataLoadingAPI.mockReturnValue(mockLoadingPromise)
        covidAPI.getStateWideAPI = mockCovid19DataLoadingAPI
        findAllByText(/Zonal Dashboard/i)
        waitFor(() => {
            getByLabelText("audio-loading")
        })
        findAllByText(/District-wise Cases Analysis/i)

    })

    it("should test the data loading state of covi19DashBoard Route ", () => {

        const {
            getByLabelText,
            findAllByText,
            debug,
            getByText } = render(
                <Provider covidStore={covidStore} authenticationStore={authenticationStore} >
                    <Covid19DashboardRoute />
                </Provider>

            )
        const mockLoadingPromise = new Promise(() => { })
        const mockCovid19DataLoadingAPI = jest.fn()
        mockCovid19DataLoadingAPI.mockReturnValue(mockLoadingPromise)
        covidAPI.getStateWideAPI = mockCovid19DataLoadingAPI
        findAllByText(/Cumulative/i)
        waitFor(() => {
            getByLabelText("audio-loading")
        })
        findAllByText(/daily/i)

    })
    it("should test the data loading state of covi19DashBoard Route ", () => {

        const {
            getByLabelText,
            findAllByText,
            debug,
            getByText } = render(
                <Provider covidStore={covidStore} authenticationStore={authenticationStore} >
                    <Covid19DashboardRoute />
                </Provider>)
        const mockLoadingPromise = new Promise(() => { })
        const mockCovid19DataLoadingAPI = jest.fn()
        mockCovid19DataLoadingAPI.mockReturnValue(mockLoadingPromise)
        findAllByText(/Sign Out/i)
        waitFor(() => {
            getByLabelText("audio-loading")
        })
    })
});