import React from 'react';
import { observer } from "mobx-react";
import { computed } from 'mobx';
import Input from "../../../Common/components/Input";
import { Button } from "../../../Common/components/Button/Button";
import strings from '../../i18n/strings.json';
import { imgUrl } from '../../constants/Imgurl'
import {
    LoginPageBodyDiv, LoginMainDiv, Img, Heading, ErrorMessage,
    PasswordHeading, UserNameHeading, DotHaveAccountHeading, SignUp
} from './styledComponents';
@observer
class LoginPage extends React.Component {
    @computed
    get userNameError() {
        return this.props.userNameErrorMessage === '' ? true : false;
    }
    @computed
    get passwordError() {
        return this.props.passwordErrorMessage === '' ? true : false;
    }
    render() {
        const { onChangeUserName, onChangePassword, onClickLogin,
            passwordErrorMessage, userNameErrorMessage, clicked,userNameRef,passwordRef } = this.props;
        return (
            <LoginPageBodyDiv>
                <LoginMainDiv>
                    <Img src={imgUrl} />
                    <Heading>{strings.HiTherePleseSignup}</Heading>
                    <UserNameHeading>{strings.userName}</UserNameHeading>
                    <Input type={strings.typeText} error={this.userNameError}
                        placeholder={strings.userNamePlaceHolder} inputRef={userNameRef}
                        onChange={onChangeUserName} />
                    {
                        userNameErrorMessage !== '' ?
                            <ErrorMessage>{userNameErrorMessage}</ErrorMessage> : <ErrorMessage></ErrorMessage>
                    }
                    <PasswordHeading>{strings.password}</PasswordHeading>
                    <Input type={strings.typePassword} placeholder={strings.passwordPlaceHolder} ref={this.passwordRef}
                        onChange={onChangePassword} error={this.passwordError} inputRef={passwordRef} />
                    {
                        passwordErrorMessage !== '' ?
                            <ErrorMessage>{passwordErrorMessage}</ErrorMessage> : <ErrorMessage></ErrorMessage>
                    }
                    <Button buttonName={strings.login} onClickLogin={onClickLogin} clicked={clicked} />
                    <DotHaveAccountHeading>{strings.dontHaveAnAccount}<SignUp href="#">{strings.signUp}</SignUp></DotHaveAccountHeading>
                </LoginMainDiv>
            </LoginPageBodyDiv>
        )
    }
}

export {
    LoginPage
}