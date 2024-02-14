import React from 'react';
import {TitlePropsType} from "./types/title.types";
import {cn} from "../../utils";

const BlockTitle: React.FC<TitlePropsType> = ({text, classnames}) => {
    return  <h3 className={cn("block-title", classnames)}>{text}</h3>
}

export default BlockTitle;