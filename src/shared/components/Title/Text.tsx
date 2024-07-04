import React from 'react';
import {TextProps} from "./types/title.types";
import {cn} from "../../utils";

const Text: React.FC<TextProps> = ({text, classnames, children}) => {
    return  <p className={cn("text", classnames)}>{text}
        {children}
    </p>
}


export default Text;