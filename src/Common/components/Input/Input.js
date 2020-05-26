import React from 'react';
import { InputTag} from './styledComponent'
class Input extends React.Component {
    render() {
        const { type, value, onChange,placeholder} = this.props;
        return (
            <InputTag type={type} value={value} onChange={onChange} placeholder={placeholder}/>
        )
    }
}

export {
    Input
}