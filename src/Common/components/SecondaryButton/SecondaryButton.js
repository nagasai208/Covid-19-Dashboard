import React from 'react';
import { Button } from './styledComponents';


class SecondaryButton extends React.Component {

    render() {
        const { btnName, onClick } = this.props;
        return (
            <Button onClick={onClick}>{btnName}</Button>
        )
    }

}

export {
    SecondaryButton
}