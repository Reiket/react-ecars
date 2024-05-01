import React from "react";

export interface ItemsCommunication {
    icon: React.JSX.Element;
    title: string
    text: string
    btnText: string
}

export interface PItemsCommunication extends ItemsCommunication {
    isContactText: boolean
}