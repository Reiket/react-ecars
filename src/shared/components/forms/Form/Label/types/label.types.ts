import React from "react";

export type LabelProps = {
    name?: string
    errors?: string | undefined
    children: React.ReactNode
    classnames?: string
    htmlFor?: string
    hintType?: string
}


