import React from 'react'
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Covid19DashBoard } from "./Covid19DashBoard";
import { Provider } from "mobx-react";
import Covid19StateStore from '../../stores/Covid19StateStore'
import Covid19ServiceFixturesData from "../../services/Covid19Service/Covid19FixturesData/Covid19iService.fixtures";

describe('DashBoard test casses', () => {
    let covidAPI;
    let covid19StateStore;

    beforeEach(() => {
        covidAPI = new Covid19ServiceFixturesData();
        covid19StateStore = new Covid19StateStore(covidAPI)
    });

    it('header testCase', () => {
        const { getByLabelText, getByPlaceholderText, getByRole } = render(
            <Provider >
                <Covid19DashBoard covid19StateStore={covid19StateStore} />
            </Provider>
        )
    })
})
