import React from 'react';
import { Button } from './styledComponents';
type SecondaryButtonPrps = {
    btnName:string
    onClick:(event: { preventDefault: () => void; })=> void
}

class SecondaryButton extends React.Component <SecondaryButtonPrps> {

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