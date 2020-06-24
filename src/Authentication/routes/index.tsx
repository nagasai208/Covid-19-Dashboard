import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import LoginPageRoute from "./LoginInPageRoute";

const loginRoute =
    <Route  path='/hello' component={LoginPageRoute} />


export { loginRoute };