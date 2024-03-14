import React from 'react';
import {TInputProps} from "./types/input.types";

const Input: React.FC<TInputProps> = ({register,   placeholder, rules, name}) => {
    const isType = name !== "email"  ? "text" : name
    return <input placeholder={placeholder} {...register(name, rules)} type={isType}
                  autoComplete={"off"} className="get-quote__input"/>
};

export default Input;