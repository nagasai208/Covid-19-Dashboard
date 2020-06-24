import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import {
    COVID19_DASHBOARD
} from '../constants/RouteConstants';
import DashBoardRoute from "./DashboardRoute/DashBoardRoute";

const DashBoard = [
    <Route key={Math.random()} path={COVID19_DASHBOARD} component={DashBoardRoute} />
]
export default DashBoard;
