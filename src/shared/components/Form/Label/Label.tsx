import React from 'react';
import {capitalizeFirstLetter, cn} from "../../../utils";
import {TLabelProps} from "./types/label.types";

const Label: React.FC<TLabelProps> = ({name, classnames, errors, children }) => {
    return <label className={cn(classnames)}>
        {name && <span>{capitalizeFirstLetter(name)}</span>}
        {children}
        {<p className={"get-quote__error"}>{errors}</p>}
    </label>
};

export default Label;