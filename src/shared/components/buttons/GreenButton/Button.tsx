import React, {FC} from 'react';
import {ButtonProps} from "./types/button.types";


const Button: FC<ButtonProps> = ({children, theme = "green",  size= "small",  type = "submit", classnames=""}) => {
    const buttonStyle = `${classnames} button ${size} ${theme}`
    return <button className={buttonStyle} type={type}>
        {children}
    </button>
};

export default Button;