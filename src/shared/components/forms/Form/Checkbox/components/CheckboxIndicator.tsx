import React, {FC} from 'react';
import {BsCheck} from "react-icons/bs";
import {cn} from "../../../../../utils";

const CheckboxIndicator: FC = () => {
    return <span className={cn("checkbox__indicator", {
    })}><BsCheck/></span>
};

export default CheckboxIndicator;