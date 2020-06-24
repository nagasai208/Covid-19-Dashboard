import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";
import AuthenticationService from "../../services/AuthenticationService/AuthenticationAPIData";
import AuthenticationStore from "../../stores/AuthenticationStore";
import { COVID19_DASHBOARD } from "../../../Covid19Dashboard/constants/RouteConstants";
import { LoginPageRoute } from "./LoginPageRoute";
import stores from '../../../Common/stores'
import userDetails from '../../fixtures/LoginDetails.json';
const LocationDisplay = withRouter(({ location }) => (
    <div data-testid="location-display">{location.pathname}</div>
));
describe("LoginPageRoute Tests", () => {
    let authAPI;
    let authStore;

    beforeEach(() => {
        authAPI = new AuthenticationService();
        authStore = new AuthenticationStore(authAPI);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it("should render username empty error message", () => {
        const { getByText, getByRole } = render(
            <Router history={createMemoryHistory()}>
                <Provider {...stores} >
                    <LoginPageRoute authStore={authStore} />
                </Provider>
            </Router>
        );
        const signInButton = getByRole("button", { name: "Sign In" });
        fireEvent.click(signInButton);
        getByText(/enter username/i);
    });

    it("should render password empty error message", () => {
        const { getByText, getByPlaceholderText, getByRole } = render(
            <Router history={createMemoryHistory()}>
                <Provider {...stores} >
                    <LoginPageRoute authStore={authStore} />
                </Provider>
            </Router>
        );
        const username = "test-user";
        const usernameField = getByPlaceholderText("Enter username");
        const signInButton = getByRole("button", { name: "Sign In" });
        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.click(signInButton);
        getByText(/enter password/i);
    });

    it("should submit sign-in on press enter", () => {
        const { getByLabelText, getByPlaceholderText, getByRole } = render(
            <Router history={createMemoryHistory()}>
                <Provider {...stores} >
                    <LoginPageRoute authStore={authStore} />
                </Provider>
            </Router>
        );
        const username = "test-user";
        const password = "test-password";

        const usernameField = getByPlaceholderText("Enter username");
        const passwordField = getByPlaceholderText("Enter password");
        const signInButton = getByRole("button", { name: "Sign In" });

        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.keyPress(signInButton, { key: "Enter", code: "Enter" });

        waitFor(() => getByLabelText("audio-loading"));
    });


    it("should render signInRoute loading state", async () => {
        const { getByLabelText, getByPlaceholderText, getByRole } = render(
            <Router history={createMemoryHistory()}>
                <Provider {...stores} >
                    <LoginPageRoute authStore={authStore} />
                </Provider>
            </Router>
        );
        const username = "test-user";
        const password = "test-password";

        const usernameField = getByPlaceholderText("Enter username");
        const passwordField = getByPlaceholderText("Enter password");
        const signInButton = getByRole("button", { name: "Sign In" });

        const mockLoadingPromise = new Promise(function (resolve, reject) { });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        authAPI.signInAPI = mockSignInAPI;

        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.click(signInButton);

        getByLabelText("audio-loading");
        getByRole("button", { disabled: true });
    });


    it("should render signInRoute success state", async () => {
        const history = createMemoryHistory();
        const route = COVID19_DASHBOARD;
        history.push(route);

        const {
            getByPlaceholderText,
            getByRole,
            queryByRole,
            queryByLabelText,
            getByTestId
        } = render(
            <Provider {...stores}>
                <Router history={history}>
                    <Route path='/login'>
                        <LoginPageRoute />
                    </Route>
                    <Route path={COVID19_DASHBOARD}>
                        <LocationDisplay />
                    </Route>
                </Router>
            </Provider>
        );

        const mockSuccessPromise = new Promise(function (resolve, reject) {
            resolve(userDetails);
        });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        authAPI.loginAPI = mockSignInAPI;
        await waitFor(() => {
            expect(
                queryByRole("button", { name: "Sign in" })
            ).not.toBeInTheDocument();
            expect(getByTestId("location-display")).toHaveTextContent(
                COVID19_DASHBOARD
            );
        });
    });




})