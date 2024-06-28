import React, {FC} from 'react';
import {CheckboxBlockProps} from "./types/checkbox.types";


const CheckboxBlock: FC<CheckboxBlockProps> = ({children, text}) => {
    return <div className="checkbox-block">
        {children}
        <p className="checkbox-block__text">{text}</p>
    </div>
};

export default CheckboxBlock;