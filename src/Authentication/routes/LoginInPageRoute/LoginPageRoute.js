import React from 'react';
import { observable } from "mobx";
import { Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";
import LoginPage from "../../components/LoginInPage";
import strings from '../../i18n/strings.json';
import { COVID19_DASHBOARD } from '../../../Covid19Dashboard/constants/RouteConstants'
@inject('authenticationStore')
@observer
class LoginPageRoute extends React.Component {
    @observable clicked = false;
    userNameRef = React.createRef();
    passwordRef = React.createRef();
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
            event.preventDefault();
            this.props.authenticationStore.userNameErrorMessage = strings.errorMessageUserName;
            this.userNameRef.current.focus();
        }
        if (this.props.authenticationStore.password === '') {
            event.preventDefault();
            this.props.authenticationStore.passwordErrorMessage = strings.errorMessagePAssword;
            if (this.props.authenticationStore.userName === '') {
                this.userNameRef.current.focus();
            }
            else {
                this.passwordRef.current.focus()
            }
        }
        else {
            
            this.clicked = true;
            event.preventDefault();
            const requestObject = {
                username:this.props.authenticationStore.userName,
                    password:this.props.authenticationStore.password
            }
            await this.props.authenticationStore.userLogin(requestObject)
           
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
                passwordErrorMessage={passwordErrorMessage} userNameRef={this.userNameRef} passwordRef={this.passwordRef}
                clicked={this.clicked}
            />
        )
    }
}


export {
    LoginPageRoute
}