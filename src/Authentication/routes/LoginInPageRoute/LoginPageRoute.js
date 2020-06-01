import React from 'react';
import { observable } from "mobx";
import { Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";
import LoginPage from "../../components/LoginInPage";
import strings from '../../i18n/strings.json';
import { COVID19_DASHBOARD} from '../../../Covid19Dashboard/constants/RouteConstants'
@inject('authenticationStore')
@observer
class LoginPageRoute extends React.Component {
    @observable clicked = false;
    @observable token
    loginPageRef = React.createRef()
    constructor(props) {
        super(props)

    }
    componentWillMount() {
        this.props.authenticationStore.clearStore();
    }
    onChangeUserName = (event) => {
        let value = event.target.value;
        this.props.authenticationStore.onChangeUserName(value)
    }
    onChangePassword = (event) => {
        let value = event.target.value;
        this.props.authenticationStore.onChangePassword(value);
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
        }
        event.preventDefault();
    }
    render() {
        const { passwordErrorMessage, userNameErrorMessage, accessToken } = this.props.authenticationStore;
        if (accessToken) {
            return (
                <Redirect to={COVID19_DASHBOARD} />
            )
        }
        return (
            <LoginPage onChangeUserName={this.onChangeUserName} onChangePassword={this.onChangePassword}
                onClickLogin={this.onClickLogin} userNameErrorMessage={userNameErrorMessage}
                passwordErrorMessage={passwordErrorMessage} ref={this.loginPageRef}
                clicked={this.clicked}
                 />
        )
    }
}


export {
    LoginPageRoute
}