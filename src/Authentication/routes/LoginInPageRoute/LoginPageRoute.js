import React from 'react';
import LoginPage from "../../components/LoginInPage";
import { observer, inject } from "mobx-react";
import strings from '../../i18n/strings.json';
@inject('authenticationStore')
@observer
class LoginPageRoute extends React.Component {
    onChangeUserName = (event) => {
        this.props.authenticationStore.userName = event.target.value;
    }
    onChangePassword = (event) => {
        this.props.authenticationStore.password = event.target.value;
    }
    onClickLogin = (event) => {
        if (this.props.authenticationStore.userName === '') {
            this.props.authenticationStore.errorMessage = strings.errorMessageUserName;
        }
        else if  (this.props.authenticationStore.password === '') {
            this.props.authenticationStore.errorMessage = strings.errorMessagePAssword;
        }
        else {
            this.props.authenticationStore.errorMessage = '';
        }
    }
    render() {
        const { errorMessage } = this.props.authenticationStore;
        return (
            <LoginPage onChangeUserName={this.onChangeUserName} onChangePassword={this.onChangePassword} onClickLogin={this.onClickLogin} errorMessage={errorMessage} />
        )
    }
}

export {
    LoginPageRoute
}