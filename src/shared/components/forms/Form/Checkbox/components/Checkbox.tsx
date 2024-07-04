import React, {ChangeEvent, FC} from 'react';
import CheckboxIndicator from "./CheckboxIndicator";
import Label from "../../Label/Label";
import {CheckboxProps} from "../types/checkbox.types";


const Checkbox: FC<CheckboxProps> = ({checkboxId, name, onChange, errors, isDisabled= false, isChecked= false,  value = ""}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked)
    }
    return <Label  classnames={"checkbox"} htmlFor={checkboxId} errors={errors}>
        <input onChange={handleChange} id={checkboxId} className="checkbox__input" disabled={isDisabled} type="checkbox" value={value} name={name} checked={isChecked}/>
        <CheckboxIndicator/>
    </Label>
};

export default Checkbox;