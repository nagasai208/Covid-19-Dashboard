import React from 'react';
import ReactDom from 'react-dom';
import { Button } from "./Button";
import { render } from "@testing-library/react";
describe("ButtonText ", () => {
    it("button", () => {
        const { getByText, getByTestId, debug } = render(
            <Button buttonName={'sai'} />
        )
        expect(getByTestId('button')).toHaveTextContent('sai');
    })
})