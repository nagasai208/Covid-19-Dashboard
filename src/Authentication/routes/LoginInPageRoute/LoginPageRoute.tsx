import React, { ChangeEvent } from 'react';
import { observable } from "mobx";
import { Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";
import LoginPage from "../../components/LoginInPage";
import strings from '../../i18n/strings.json';
import { COVID19_DASHBOARD } from '../../../Covid19Dashboard/constants/RouteConstants';
import AuthenticationStore from "../../stores/AuthenticationStore";

type AuthenticationProps = {
    authenticationStore: AuthenticationStore,
    onClickLogin:()=>void
    
}

@inject('authenticationStore')
@observer
class LoginPageRoute extends React.Component <AuthenticationProps> {
    @observable clicked :boolean = false;
    userNameRef:any = React.createRef();
    passwordRef:any = React.createRef();

    componentWillMount() {
        this.props.authenticationStore.clearStore();
    }
    onChangeUserName = (event: { target: { value: string; }; }) => {
        let value = event.target.value;
        this.props.authenticationStore.onChangeUserName(value)
    }
    onChangePassword = (event: { target: { value: string; }; }) => {
        let value = event.target.value;
        this.props.authenticationStore.onChangePassword(value);
    }
    onClickLogin = async (event: { preventDefault: () => void; }) => {
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
            if (this.props.authenticationStore.userNameErrorMessage !== '' || this.props.authenticationStore.passwordErrorMessage !=='') {
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
                passwordErrorMessage={passwordErrorMessage}  
                clicked={this.clicked} userNameRef={this.userNameRef} passwordRef={this.passwordRef}
            />
        )
    }
}


export {
    LoginPageRoute
}
