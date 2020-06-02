import React from 'react';
import { InputTag, InputTagDiv, ErrorImg } from './styledComponents'
import { errorImg } from "../../../Authentication/constants/ErrorImg";
class Input extends React.Component {
    render() {
        const { type, onChange, placeholder, error, inputRef } = this.props;
        return (
            <InputTagDiv error={error}>
                <InputTag type={type} error={error} onChange={onChange} placeholder={placeholder} ref={inputRef} />
                {
                    error ? '' :
                        <ErrorImg src={ errorImg} />
                }

            </InputTagDiv>
        )
    }
}


export {
    Input
}