import React,{Component} from 'react';
import { UserNameValidate, PasswordValidate } from "../../utils/ValidateUtils";
import { observable } from "mobx";
import { observer } from "mobx-react";

import strings from '../../i18n/strings.json'
type ValidateInputProps = {
    placeHolder:string
}
@observer
class InputText extends Component<ValidateInputProps> {
    @observable value!:string
   @observable errorMessage!:string
    onChange=(event)=>{
        this.value = event.target.value
    }

    onBlurInput=()=>{
        if(this.props.placeHolder===strings.enterUserName){
            this.errorMessage =  UserNameValidate(this.value)
        }
        else if (this.props.placeHolder===strings.enterPassword){
            this.errorMessage = PasswordValidate(this.value)
        }
       

    }
    render(){
        const{placeHolder} = this.props;
        return (
            <div>
            <input value={this.value} onChange={this.onChange} onBlur={this.onBlurInput} placeholder={placeHolder}/>
        <p>{this.errorMessage}</p>
            </div>
        )
    }
}

export {InputText}