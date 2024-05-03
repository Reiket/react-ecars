import React from "react";

export type GreenBtnPropsType = {
    classnames?: string;
    text: string;
    type: "button" | "link";
    href?: string;
    onClick?: () => void
};

type ButtonType = "submit" | "button"
type ButtonSize = "small" | "big"
type ButtonTheme = "green" | "white"
export interface ButtonProps {
    children: React.ReactNode
    classnames?: string
    type?: ButtonType
    size?: ButtonSize
    theme?: ButtonTheme
}