import React from 'react';
import { Route } from 'react-dom'
import {
    LOGIN
} from '../constants/RouteConstants';
import LoginPageRoute from "./LoginInPageRoute";

const loginRoute =
    <Route  path='/hello' component={LoginPageRoute} />


export { loginRoute };