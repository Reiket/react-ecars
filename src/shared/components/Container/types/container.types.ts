import React from "react";

export interface IPContainer {
    classnames: string
    children: React.ReactNode
    size?: "big" | "small"
}