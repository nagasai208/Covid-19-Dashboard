import React from 'react';
import Input from "../../../Common/components/Input";
import { Button } from "../../../Common/components/Button/Button";
import strings from '../../i18n/strings.json';
import { observer } from "mobx-react";
import { LoginPageBodyDiv, LoginMainDiv, Img, Heading, ErrorMessage, UserNameTag} from './styledComponent';
@observer
class LoginPage extends React.Component {
    render() {
        const { onChangeUserName, onChangePassword, onClickLogin, errorMessage } = this.props;
        return (
            <LoginPageBodyDiv>
                <LoginMainDiv>
                    <Img src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/8b9ff190-f490-4211-b2dd-61f476cfeabd.svg"/>
                    <Heading>{strings.HiTherePleseSignup}</Heading>
                    <UserNameTag>{strings.userName}</UserNameTag>
                <Input type='text' placeholder={strings.userNamePlaceHolder} onChange={onChangeUserName} />
                {errorMessage === strings.errorMessageUserName &&
                        <ErrorMessage>{errorMessage}</ErrorMessage>
                }
                <p>{strings.password}</p>
                <Input type='password' placeholder={strings.passwordPlaceHolder} onChange={onChangePassword} />
                {
                    errorMessage === strings.errorMessagePAssword && 
                        <ErrorMessage>{errorMessage}</ErrorMessage>
                }
                    <Button buttonName={strings.login} onClickLogin={onClickLogin} />
                </LoginMainDiv>
            </LoginPageBodyDiv>
        )
    }
}

export {
    LoginPage
}