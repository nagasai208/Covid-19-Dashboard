import React from 'react';
import SecondaryButton from "../../../Common/components/SecondaryButton";
import strings from '../../i18n/strings.json';
import { ButtonDiv, SignOutButtonMainDiv} from "./styledComponents";
type SignOutButtonProps = {
    onClickSignOut:()=>void
}
class SignOutButton extends React.Component <SignOutButtonProps>{
    render() {
        const { onClickSignOut } = this.props;
        return (
            <SignOutButtonMainDiv>
            <ButtonDiv>
                <SecondaryButton btnName={strings.signOut} onClick={onClickSignOut} />
                </ButtonDiv>
            </SignOutButtonMainDiv>
        )
    }
}

export {
    SignOutButton
}