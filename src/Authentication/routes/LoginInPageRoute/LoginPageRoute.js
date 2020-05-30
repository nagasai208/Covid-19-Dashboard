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
    @observable token
    constructor(props) {
        super(props)
        this.token = getAccessToken()

    }
    componentWillMount() {
        this.props.authenticationStore.clearStore();
    }
    onChangeUserName = (event) => {
        this.props.authenticationStore.userName = event.target.value;
    }
    onChangePassword = (event) => {
        this.props.authenticationStore.password = event.target.value;
    }
    onClickLogin = async (event) => {
        if (this.props.authenticationStore.userName === '') {
            this.props.authenticationStore.userNameErrorMessage = strings.errorMessageUserName;
        }
         else if (this.props.authenticationStore.password === '') {
            this.props.authenticationStore.passwordErrorMessage = strings.errorMessagePAssword;
        }
        else {
            this.clicked = true;
            event.preventDefault();
            await this.props.authenticationStore.userLogin()
            if ((this.props.authenticationStore.passwordErrorMessage !== '') || (this.props.authenticationStore.userNameErrorMessage !== '')) {
                this.clicked = false;
            }
            this.token = getAccessToken();
        }
        event.preventDefault();
    }
    render() {
        const { passwordErrorMessage, userNameErrorMessage } = this.props.authenticationStore
        if (this.token) {
            return (
                <Redirect to={{ pathname: '/covid19-dashboard' }} />
            )
        }
        return (
            <LoginPage onChangeUserName={this.onChangeUserName} onChangePassword={this.onChangePassword}
                onClickLogin={this.onClickLogin} userNameErrorMessage={userNameErrorMessage} passwordErrorMessage={passwordErrorMessage}
                clicked={this.clicked}
                 />
        )
    }
}

export {
    LoginPageRoute
}