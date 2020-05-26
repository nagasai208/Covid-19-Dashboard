import React from 'react';
import { ButtonTag } from './styledComponent';
class Button extends React.Component {
    render() {
        const { buttonName, onClickLogin } = this.props;
        return (
            <ButtonTag onClick={onClickLogin}>{buttonName}</ButtonTag>
        )
    }
}

export {
    Button
}