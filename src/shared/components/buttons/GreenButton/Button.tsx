import React, {FC} from 'react';
import {ButtonProps} from "./types/button.types";


const Button: FC<ButtonProps> = ({children, onClick, theme = "green",  size= "small",  type = "submit", classnames= ""}) => {
    const buttonStyle = `${classnames} button ${size} ${theme}`
    return <button onClick={onClick} className={buttonStyle} type={type}>
        {children}
    </button>
};

export default Button;