import React from 'react';
import {TLabelProps} from "./types/label.types";
import {capitalizeFirstLetter, cn} from "../../../../utils";

const Label: React.FC<TLabelProps> = ({name, htmlFor, classnames = "label", errors, children, hintType }) => {

    return <div className={"label-container"}>
        <div className={"label-container__info"}>
            {name && <span>{capitalizeFirstLetter(name)}</span>}
            {!!hintType && (
                <button className={"label-container__hint label-container__hint_button"}>Reset</button>
            )}
        </div>
        <label htmlFor={htmlFor} className={cn(classnames, {
            "error": errors
        })}>
            {children}
            <p className={"label__error"}>{errors}</p>
        </label>
    </div>

};



export default Label;