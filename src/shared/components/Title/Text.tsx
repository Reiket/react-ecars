import React from 'react';
import {TText} from "./types/title.types";
import {cn} from "../../utils";

const Text: React.FC<TText> = ({text, classnames}) => {
    return  <p className={cn("text", classnames)}>{text}</p>
}


export default Text;