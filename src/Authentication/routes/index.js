import React from 'react';
import { Route } from 'react-dom'
import {
    LOGIN
} from '../constants/RouteConstants';
import LoginPageRoute from "./LoginInPageRoute";



const loginAppRoute = [
    <Route key={Math.random()}path={LOGIN} component={LoginPageRoute} />
]

export default loginAppRoute;