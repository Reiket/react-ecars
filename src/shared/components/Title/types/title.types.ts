import React from "react";

export type TitlePropsType = {
    text: string
    classnames?: string
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