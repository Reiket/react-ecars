import React from "react";

export interface CheckboxBlockProps {
    children: React.ReactNode
    text: string
}

export interface CheckboxProps {
    checkboxId: string
    name?: string
    value?: string
    isDisabled?: boolean
    isChecked: boolean
    onChange: (checked: boolean) => void
    errors?: string
}

