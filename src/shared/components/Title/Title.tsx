import React from 'react';
import {TitlePropsType} from "./types/title.types";
import {cn} from "../../utils";
const Title: React.FC<TitlePropsType> = ({text, classnames}) => {
    return  <h2 className={cn("title", classnames)}>{text}</h2>
}

export default Title;