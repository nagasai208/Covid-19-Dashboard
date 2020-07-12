import React from 'react'
import { observer } from 'mobx-react'
import { computed } from 'mobx'
import Input from '../../../Common/components/Input'
import { Button } from '../../../Common/components/Button/Button'
//import strings from '../../i18n/strings.json'
import { imgUrl } from '../../constants/Imgurl'
import {
   LoginPageBodyDiv,
   LoginMainDiv,
   Img,
   Heading,
   ErrorMessage,
   PasswordHeading,
   UserNameHeading,
   DotHaveAccountHeading,
   SignUp,
   Select,
   SelectDiv
} from './styledComponents'
import { withTranslation, WithTranslation } from 'react-i18next'
import i18n from '../../../Common/i18n'
interface LoginPageProps extends WithTranslation {
   onChangeUserName: (event: { target: { value: string } }) => void
   onChangePassword: (event: { target: { value: string } }) => void
   onClickLogin: (event: { preventDefault: () => void }) => void
   passwordErrorMessage: string
   userNameErrorMessage: string
   clicked: boolean
   userNameRef: React.RefObject<HTMLInputElement>
   passwordRef: React.RefObject<HTMLInputElement>
}
@observer
class LoginPage extends React.Component<LoginPageProps> {
   componentDidMount() {
      if (this.props.userNameRef.current) {
         this.props.userNameRef.current.focus()
      }
   }
   @computed
   get userNameError() {
      return this.props.userNameErrorMessage === '' ? true : false
   }
   @computed
   get passwordError() {
      return this.props.passwordErrorMessage === '' ? true : false
   }
   onChangeLanguage = event => {
      i18n.changeLanguage(event.target.value)
   }
   render() {
      const {
         t,
         onChangeUserName,
         onChangePassword,
         onClickLogin,
         passwordErrorMessage,
         userNameErrorMessage,
         clicked,
         userNameRef,
         passwordRef
      } = this.props
      return (
         <LoginPageBodyDiv>
            <LoginMainDiv>
               <Img src={imgUrl} />
               <Heading>{t('strings:HiTherePleseSignup')}</Heading>
               <UserNameHeading>{t('strings:userName')}</UserNameHeading>
               <Input
                  type='text'
                  error={this.userNameError}
                  placeholder={t('strings:userNamePlaceHolder')}
                  onChange={onChangeUserName}
                  inputRef={userNameRef}
               />
               {userNameErrorMessage !== '' ? (
                  <ErrorMessage>{userNameErrorMessage}</ErrorMessage>
               ) : (
                  <ErrorMessage></ErrorMessage>
               )}
               <PasswordHeading>{t('strings:password')}</PasswordHeading>
               <Input
                  type='password'
                  placeholder={t('strings:passwordPlaceHolder')}
                  onChange={onChangePassword}
                  error={this.passwordError}
                  inputRef={passwordRef}
               />
               {passwordErrorMessage !== '' ? (
                  <ErrorMessage>{passwordErrorMessage}</ErrorMessage>
               ) : (
                  <ErrorMessage></ErrorMessage>
               )}
               <Button
                  buttonName={t('strings:login')}
                  onClickLogin={onClickLogin}
                  clicked={clicked}
               />
               <DotHaveAccountHeading>
                  {t('strings:dontHaveAnAccount')}
                  <SignUp href='#'>{t('strings:signUp')}</SignUp>
               </DotHaveAccountHeading>
               <SelectDiv>
                  <Select onChange={this.onChangeLanguage}>
                     <option value='en'>English</option>
                     <option value='telugu'>telugu</option>
                     <option value='hindi'>hindi</option>
                  </Select>
               </SelectDiv>
            </LoginMainDiv>
         </LoginPageBodyDiv>
      )
   }
}
export default withTranslation('translation', { withRef: true })(LoginPage)
