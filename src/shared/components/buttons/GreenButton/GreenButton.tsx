import React from 'react';
import {GreenBtnPropsType} from "./types/green-btn.types";

const GreenButton: React.FC<GreenBtnPropsType> = ({classnames, text, type, href, onClick}) => {
    const className = `${classnames} green-button`;

    return type === "button" ? <button onClick={onClick} className={className}>{text}</button> : <a href={href} className={className}>{text}</a>
}

export default GreenButton;