import React from "react";

export interface CheckboxBlockProps {
    children: React.ReactNode
    text: string
}

export interface CheckboxProps {
    checkboxId: string
    name?: string
    value?: string
    isDisabled: boolean
    errors?: string
}

export interface CheckboxIndicatorProps {
    isDisabled: boolean
    withError: boolean
}