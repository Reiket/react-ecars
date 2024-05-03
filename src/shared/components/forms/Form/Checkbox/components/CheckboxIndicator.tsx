import React, {FC} from 'react';
import {BsCheck} from "react-icons/bs";
import {cn} from "../../../../../utils";
import {CheckboxIndicatorProps} from "../types/checkbox.types";

const CheckboxIndicator: FC<CheckboxIndicatorProps> = ({isDisabled, withError}) => {
    return <span className={cn("checkbox__indicator", {
        "disabled": isDisabled,
        "error": withError
    })}><BsCheck/></span>
};

export default CheckboxIndicator;