import React from "react";

export type TitlePropsType = {
    text: string
    classnames?: string
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

type TLink = {
    link: string
    children?: React.ReactNode
}
type TItemTitle = {
    size: "big" | "small"
}

export type TPropsLink = TitlePropsType & TLink;

export type TPropsItemTitle = TitlePropsType & TItemTitle