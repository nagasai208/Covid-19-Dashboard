import React from 'react';
import { observer } from "mobx-react";
import { getAccessToken } from "../../../Authentication/utils/StorageUtils";
@observer
function WithAccessToken(WrappedComponent) {
    return class extends React.Component {
        @observable accessToken
        constructor(props) {
           
        }
        componentDidMount() {
            this.accessToken = getAccessToken();
        }

        render() {
            return (

                <WrappedComponent {...this.props} accessToken={this.accessToken}/>
            )
        }

    }
}


export {WithAccessToken};