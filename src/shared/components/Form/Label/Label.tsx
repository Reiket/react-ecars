import React from 'react';
import {capitalizeFirstLetter, cn} from "../../../utils";
import {TLabelProps} from "./types/label.types";

const Label: React.FC<TLabelProps> = ({name, htmlFor, classnames = "label", errors, children }) => {
    return <label htmlFor={htmlFor} className={cn(classnames, {
        "error": errors
    })}>
        {name && <span>{capitalizeFirstLetter(name)}</span>}
        {children}
        <p className={"label__error"}>{errors}</p>
    </label>
};

export default Label;