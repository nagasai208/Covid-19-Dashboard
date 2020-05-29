import React from 'react';
import { observable } from "mobx";
import { Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";
import LoginPage from "../../components/LoginInPage";
import strings from '../../i18n/strings.json';
import { getAccessToken } from "../../utils/StorageUtils";
@inject('authenticationStore')
@observer
class LoginPageRoute extends React.Component {
    @observable clicked = false;
    @observable userName = '';
    @observable password = '';
    @observable errorMessage = '';
    @observable token
    constructor(props) {
        super(props)
        this.token = getAccessToken()

    }
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
            this.props.authenticationStore.setUserSignInAPIResponse();
            this.props.authenticationStore.userLoginin(this.userName, this.password)
           this.token = getAccessToken()
            
        }
        event.preventDefault();
    }
    render() {
        const { authenticationStore } = this.props;
        if (this.token) {
            return (
                <Redirect to={{ pathname: '/covid19-dashboard' }} />
            )
        }
        return (
            <LoginPage onChangeUserName={this.onChangeUserName} onChangePassword={this.onChangePassword}
                onClickLogin={this.onClickLogin} errorMessage={this.errorMessage} clicked={this.clicked}
                authenticationStore={authenticationStore}/>
        )
    }
}

export {
    LoginPageRoute
}