import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import "./App.css";
import { Provider } from "mobx-react";
import stores from './Common/stores'
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
            <Route path="/login">
              <LoginPageRoute />
            </Route>
            <Route path="/">
            <Redirect to={'/login'} />  
            </Route>
          </Switch>
        </Router>
      </Provider>
    )
  }
}
export default App;
