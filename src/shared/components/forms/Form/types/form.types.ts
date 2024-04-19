import {FieldValues} from "react-hook-form";

export type TFields<T> = {
    label: string,
    name: keyof T,
    placeholder: string,
    rules: FieldValues,
    type?: string
    items?: TOptions[]
}

export type TOptions = {
    value: string
    label: string
}