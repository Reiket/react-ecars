import React from 'react';
import {TitlePropsType} from "./types/title.types";
import {cn} from "../../utils";

const Text: React.FC<TitlePropsType> = ({text, classnames}) => {
    return  <p className={cn("text", classnames)}>{text}</p>
}


export default Text;