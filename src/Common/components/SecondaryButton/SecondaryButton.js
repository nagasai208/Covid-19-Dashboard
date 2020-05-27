import React from 'react';
import { Button } from './styledComponent';

class SecondaryButton extends React.Component {
    render() {
        const { btnName, onClick} = this.props;
        return (
                <Button onClick={onClick}>{btnName}</Button>
        )
    }

}

export {
    SecondaryButton
}