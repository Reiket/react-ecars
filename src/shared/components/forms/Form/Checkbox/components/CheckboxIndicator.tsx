import React, {FC} from 'react';
import {BsCheck} from "react-icons/bs";
import {cn} from "../../../../../utils";

interface CheckboxIndicatorProps {
    label?: string
}

const CheckboxIndicator: FC<CheckboxIndicatorProps> = ({label}) => {
    return <span className={cn("checkbox__indicator", {
    })}><BsCheck/>SUV/Crossover</span>
};

export default CheckboxIndicator;