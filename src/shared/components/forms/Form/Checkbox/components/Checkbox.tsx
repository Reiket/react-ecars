import React, {FC, useState} from 'react';
import CheckboxIndicator from "./CheckboxIndicator";
import Label from "../../Label/Label";
import {CheckboxProps} from "../types/checkbox.types";


const Checkbox: FC<CheckboxProps> = ({checkboxId, name, errors, isDisabled= false, isChecked=false,  value = ""}) => {
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(isChecked)
    const toggleIsChecked = () => {
        setIsCheckboxChecked(prev => !prev)
    }

    return <Label  classnames={"checkbox"} htmlFor={checkboxId} errors={errors}>
        <input onChange={toggleIsChecked} id={checkboxId} className="checkbox__input" disabled={isDisabled} type="checkbox" value={value} name={name} checked={isCheckboxChecked}/>
        <CheckboxIndicator/>
    </Label>
};

export default Checkbox;