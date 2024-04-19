import React from "react";

export interface PForm {
    children: React.ReactNode
    name: string
    onSubmit: () => void
}