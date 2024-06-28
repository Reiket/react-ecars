import React from 'react';
import {LabelProps} from "./types/label.types";
import {cn} from "../../../../utils";

const Label: React.FC<LabelProps> = ({ htmlFor, classnames = "label", errors, children }) => {

    return <label htmlFor={htmlFor} className={cn(classnames, {
        "error": errors
    })}>
        {children}
        <p className={"label__error"}>{errors}</p>
    </label>

};


export default Label;