import React from 'react';
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import LoginPage from "../../components/LoginInPage";
import strings from '../../i18n/strings.json';
import { Redirect } from "react-router-dom";
@inject('authenticationStore')
@observer
class LoginPageRoute extends React.Component {
    @observable clicked = false;
    @observable userName = '';
    @observable password = '';
    @observable errorMessage = '';
    @observable token


    onChangeUserName = (event) => {
        this.userName = event.target.value;
    }
    onChangePassword = (event) => {
        this.password = event.target.value;
    }
    onClickLogin = (event) => {
        if (this.userName === '') {
            this.errorMessage = strings.errorMessageUserName; 
        }
        else if  (this.password === '') {
            this.errorMessage = strings.errorMessagePAssword;
        }
        else {
            event.preventDefault();
            this.clicked = true;
            this.errorMessage = '';
            //this.props.authenticationStore.userLoginin(this.userName, this.password)
            this.token = 1;
            
        }
        event.preventDefault();
    }
    render() {
        if (this.token) {
            return (
                <Redirect to={{ pathname: '/covid19-dashboard' }} />
            )
        }
        return (
            <LoginPage onChangeUserName={this.onChangeUserName} onChangePassword={this.onChangePassword}
                onClickLogin={this.onClickLogin} errorMessage={this.errorMessage} clicked={this.clicked} />
        )
    }
}

export {
    LoginPageRoute
}