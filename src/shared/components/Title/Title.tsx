import {cn} from "../../utils";
import React from "react";
import {TitlePropsType} from "./types/title.types";

export const Title: React.FC<TitlePropsType> = ({text, classnames, tag: Tag = "h1"}) => {
    return <Tag className={cn(classnames)}>{text}</Tag>
}