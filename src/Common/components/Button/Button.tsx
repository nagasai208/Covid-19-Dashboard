import React from 'react';
import Loader from 'react-loader-spinner'
import { ButtonTag } from './styledComponents';
type ButtonProps = {
    buttonName:string
    onClickLogin:(event: { preventDefault: () => void; })=> void
    clicked:boolean
}
class Button extends React.Component<ButtonProps> {
    render() {
        const { buttonName, onClickLogin, clicked } = this.props;
        return (
            <ButtonTag  data-testId="button" onClick={onClickLogin}>{clicked ? <Loader type="TailSpin" color='white' width={25} height={25} />:buttonName}</ButtonTag>
        )
    }
}

export {
    Button
}