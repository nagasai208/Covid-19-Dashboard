import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";

import "./App.css";
import { Provider } from "mobx-react";
import stores from '../src/stores'
import LoginPageRoute from "./Authentication/routes/LoginInPageRoute";


class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <Router basename={process.env.PUBLIC_URL} >
          <Switch>
            <Route exact path="/page-1">
              <Page1 />
            </Route>
            <Route exact path="/login">
              <LoginPageRoute />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
