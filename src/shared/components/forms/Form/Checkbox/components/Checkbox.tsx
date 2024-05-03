import React, {FC} from 'react';
import CheckboxIndicator from "./CheckboxIndicator";
import Label from "../../Label/Label";
import {CheckboxProps} from "../types/checkbox.types";


const Checkbox: FC<CheckboxProps> = ({checkboxId, name, isDisabled, errors, value = ""}) => {
    return <Label  classnames={"checkbox"} htmlFor={checkboxId} errors={errors}>
        <input id={checkboxId} className="checkbox__input" type="checkbox" value={value} name={name}/>
        <CheckboxIndicator isDisabled={isDisabled} withError={!!errors}/>
    </Label>
};

export default Checkbox;