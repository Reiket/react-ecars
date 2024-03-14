import {Control} from "react-hook-form";
import {Inputs} from "../../../Popup/components/GetQuotePopup/types/get-quote.types";

export type TSelect = {
    control: Control<Inputs>
    items: TOptions[],
    name: "brands" | "shipTo" | "name" | "email"
    placeholder: string
    rules: {
        required: string
    }
}

export type TOptions = {
    value: string
    label: string
}