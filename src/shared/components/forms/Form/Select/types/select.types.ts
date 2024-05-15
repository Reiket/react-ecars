import {Control, FieldValues} from "react-hook-form";
import {TOptions} from "../../types/form.types";
import {Inputs} from "../../../../Popup/components/GetQuotePopup/types/get-quote.types";

export type TSelect = {
    control?: Control<Inputs>
    items: TOptions[],
    name: keyof Inputs
    placeholder: string
    rules: FieldValues
    errors?: string
}
