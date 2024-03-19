import {cn} from "../../utils";
import React from "react";
import {TitlePropsType} from "./types/title.types";

// export const Title = {
//     h1: (props: TitlePropsType) => (
//         <h1 className={cn("page-title", props.classnames)}>{props.text}</h1>
//     ),
//     h2: (props: TitlePropsType) => (
//         <h2 className={cn("title", props.classnames)}>{props.text}</h2>
//     ),
//     h3_page: (props: TitlePropsType) => (
//         <h3 className={cn("page-block-title", props.classnames)}>{props.text}</h3>
//     ),
//     blockTitle: (props: TitlePropsType) => (
//         <h3 className={cn("block-title", props.classnames)}>{props.text}</h3>
//     ),
// }

export const Title: React.FC<TitlePropsType> = ({text, classnames, tag: Tag = "h1"}) => {
    return <Tag className={cn(classnames)}>{text}</Tag>
}