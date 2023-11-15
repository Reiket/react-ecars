import React from 'react';
import {GreenBtnPropsType} from "./types/shared.types";

const GreenButton: React.FC<GreenBtnPropsType> = ({classnames, text}) => {
    return  <button className={classnames}>{text}</button>
}

export default GreenButton;