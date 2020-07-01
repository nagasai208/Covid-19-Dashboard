import React from 'react';
import { observer } from "mobx-react";

function withScreenSizeDetectors<T>(WrappedComponent:React.ComponentType<T>) {
    return observer(class extends React.Component<T>{
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
            const props = this.props as T
            return (
                <WrappedComponent isDesktop={this.isDesktop} isMobile = {this.isMobile} isTablet={this.isTablet} {...props} />
                
            )
        }
    }
        
    )
}
export default withScreenSizeDetectors;









