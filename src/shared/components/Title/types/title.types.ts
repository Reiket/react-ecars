import React from "react";

export type TitlePropsType = {
    text: string
    classnames?: string
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export type TText = {
    text: string
    classnames?: string
}

type TLink = {
    link: string
    children?: React.ReactNode
}

export type TPropsLink = TitlePropsType & TLink;
