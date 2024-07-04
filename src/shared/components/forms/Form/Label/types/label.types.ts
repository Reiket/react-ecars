import React from "react";

export interface LabelProps {
    errors?: string | undefined
    children: React.ReactNode
    classnames?: string
    htmlFor?: string
    hintType?: string
}

export interface LabelContainerProps {
    label?: string
    children: React.ReactNode
    hintType?: string
    onClick?: () => void
    hasDropdown?: boolean
}


