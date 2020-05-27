import React from 'react';
import SecondaryButton from "../../../Common/components/SecondaryButton";
import strings from '../../i18n/strings.json';
import { ButtonDiv } from "./styledComponent";
class SignOutButton extends React.Component {
    render() {
        const { onClickSignOut } = this.props;
        return (
            <ButtonDiv>
                <SecondaryButton btnName={strings.signOut} onClick={onClickSignOut} />
            </ButtonDiv>
        )
    }
}

export {
    SignOutButton
}