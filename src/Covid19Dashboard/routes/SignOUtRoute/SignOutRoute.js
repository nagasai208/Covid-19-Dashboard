import React from 'react';
import SignOutButton from "../../components/SignOut";
import { clearUserSession } from "../../../Authentication/utils/StorageUtils";
class SignOutRoute extends React.Component {
   
    render() {
        const { onClickSignOut } = this.props;
        return (
            <SignOutButton onClickSignOut={onClickSignOut} />
        )
    }
}

export {
    SignOutRoute
}