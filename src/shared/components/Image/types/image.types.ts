import React from "react";

export interface ImageProps {
    name?: string
    classnames?: string
    url: string
    alt?: string
    children?: React.ReactNode
}