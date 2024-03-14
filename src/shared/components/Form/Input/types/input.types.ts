import {UseFormRegister} from "react-hook-form";
import {Inputs} from "../../../Popup/components/GetQuotePopup/types/get-quote.types";

export type TInputProps = {
    name: "brands" | "shipTo" | "name" | "email"
    register: UseFormRegister<Inputs>
    placeholder: string
    rules: {
        required: string,
        pattern?:TPattern,
        maxLength?: TLength,
        minLength?: TLength,
    }
}

type TLength = {
    value: number ,
    message: string
}

type TPattern = {
    value: RegExp,
    message: string
}

