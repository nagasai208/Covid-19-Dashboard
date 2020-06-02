import React from 'react';
import { observer } from "mobx-react";
import { observable } from "mobx";

function withScreenSizeDetectors(WrappedComponent) {
    return observer(class extends React.Component{
        isMobile = () => {
            if (window.innerWidth < 576) {
                return true;
            }
            return false;
        }
        isTablet = () => {
            if (window.innerWidth >= 576 &&window.innerWidth < 992) {
                return true;
            }
            return false;
        }
        isDesktop = () => {
            if (window.innerWidth >= 992) {
                return true;
            }
            return false;
        }

        render(){
            return (
                <WrappedComponent isDesktop={this.isDesktop} isMobile = {this.isMobile} isTablet={this.isTablet} {...this.props} />
            )
        }
    }
        
    )
}
export default withScreenSizeDetectors;