import React from 'react';
import { Route } from 'react-dom'
import {
    COVID19_DASHBOARD
} from '../constants/RouteConstants';
import DashBoardRoute from "./DashboardRoute/DashBoardRoute";
const dashBoardRoute = [
    <Route key={Math.random()} path={COVID19_DASHBOARD} component={DashBoardRoute} />
]
export default dashBoardRoute;
