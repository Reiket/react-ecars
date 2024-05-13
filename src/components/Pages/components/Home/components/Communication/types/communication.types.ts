import React from "react";
import {ButtonTheme} from "../../../../../../../shared/components/buttons/GreenButton/types/button.types";

export interface ItemsCommunication {
    icon: React.JSX.Element;
    title: string
    text: string
    btnText: string
    theme: ButtonTheme
}

export interface PItemsCommunication extends ItemsCommunication {
    isContactText: boolean
}