import React from 'react';
import { CardWrapper} from './styledComponents'
import { Style } from "../../styleGuide";
class Card extends React.Component {
    renderList = () => {
        const { title, typo: Typo } = this.props;
        if (Typo) {
            return <Typo >{title}</Typo>
        }
        return <span>{title}</span>
        
        
    }
    render() {
        const { children, onClick, className, } = this.props; n 
        
        return (
            <CardWrapper className={className} onClick={onClick}>
               
                {this.renderList()}
                {children}
            </CardWrapper>
        )
    }
}

export {Card}