import React from 'react';
import { InputTag, InputTagDiv, ErrorImg } from './styledComponents'
class Input extends React.Component {
    render() {
        const { type, onChange, placeholder, error, inputRef } = this.props;
        return (
            <InputTagDiv error={error}>
                <InputTag type={type} error={error} onChange={onChange} placeholder={placeholder} ref={inputRef} />
                {
                    error ? '' :
                        <ErrorImg src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/a68ce0bc-26a7-4037-94f4-f8461b2efea8.svg" />
                }

            </InputTagDiv>
        )
    }
}

export {
    Input
}