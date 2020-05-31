import React from 'react';
import Loader from 'react-loader-spinner'
import { ButtonTag } from './styledComponents';
class Button extends React.Component {
    render() {
        const { buttonName, onClickLogin, clicked } = this.props;
        return (
            <ButtonTag onClick={onClickLogin}>{clicked ? <Loader type="TailSpin" color='white' width={25} height={25} />:buttonName}</ButtonTag>
        )
    }
}

export {
    Button
}