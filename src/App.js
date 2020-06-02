import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import Page1 from './components/Page1'

import "./App.css";
import { Provider } from "mobx-react";
import stores from '../src/stores'
import LoginPageRoute from "./Authentication/routes/LoginInPageRoute";
import covid19DashboardRoute from "./Covid19Dashboard/routes/DashboardRoute/DashBoardRoute";
import dashBoardRoute from "./Covid19Dashboard/routes";
class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <Router basename={process.env.PUBLIC_URL} >
          <Switch>
            {covid19DashboardRoute}
            {dashBoardRoute}
            <Route path="/">
              <LoginPageRoute />
            </Route>
          </Switch>
        </Router>
      </Provider>
    )
  }
}
export default App;
