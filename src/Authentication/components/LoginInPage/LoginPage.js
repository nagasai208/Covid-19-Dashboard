import React from 'react';
import { observer } from "mobx-react";
import Input from "../../../Common/components/Input";
import { Button } from "../../../Common/components/Button/Button";
import strings from '../../i18n/strings.json';
import { imgUrl } from '../../constants/Imgurl'
import { LoginPageBodyDiv, LoginMainDiv, Img, Heading, ErrorMessage, PasswordHeading, UserNameHeading} from './styledComponent';
@observer
class LoginPage extends React.Component {
    render() {
        const { onChangeUserName, onChangePassword, onClickLogin, passwordErrorMessage, userNameErrorMessage, clicked } = this.props;
        return (
            <LoginPageBodyDiv>
                <LoginMainDiv>    
                    <Img src={imgUrl}/>
                    <Heading>{strings.HiTherePleseSignup}</Heading>
                    <UserNameHeading>{strings.userName}</UserNameHeading>
                    <Input type={strings.typeText} placeholder={strings.userNamePlaceHolder} onChange={onChangeUserName}  />
                    {userNameErrorMessage !== ''  &&
                        <ErrorMessage>{userNameErrorMessage}</ErrorMessage>
                }
                    <PasswordHeading>{strings.password}</PasswordHeading>
                    <Input type={strings.typePassword} placeholder={strings.passwordPlaceHolder} onChange={onChangePassword} />
                {
                        passwordErrorMessage !== '' && 
                        <ErrorMessage>{passwordErrorMessage}</ErrorMessage>
                }
                    <Button buttonName={strings.login} onClickLogin={onClickLogin} clicked={clicked} />
                </LoginMainDiv>
            </LoginPageBodyDiv>
        )
    }
}

export {
    LoginPage
}