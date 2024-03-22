import React from 'react';
import {TInputProps} from "./types/input.types";
import {FieldValues} from "react-hook-form";

function Input<T extends FieldValues>({ register, placeholder, rules, name, type = "text", id, classnames = "input" }: TInputProps<T>) {
    return <input
        id={id}
        placeholder={placeholder}
        {...register(name, rules)}
        type={type}
        className={classnames}
    />
}

export default Input;