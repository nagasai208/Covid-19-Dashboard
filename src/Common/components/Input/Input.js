import React from 'react';
import { InputTag} from './styledComponent'
class Input extends React.Component {
    render() {
        const { type, onChange,placeholder} = this.props;
        return (
            <InputTag type={type}  onChange={onChange} placeholder={placeholder}/>
        )
    }
}

export {
    Input
}