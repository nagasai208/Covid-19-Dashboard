import React from 'react';
class RedirectPage extends React.Component{
    constructor(props) {
        
    }
    render() {
        let { path } = this.props;
        return (
            <Redirect to={{ pathname: { path} }} />
        )
    }

}


export default RedirectPage;