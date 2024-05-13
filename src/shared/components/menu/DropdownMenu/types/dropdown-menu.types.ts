import React from "react";

export interface DropdownMenuProps {
    classnames?: string
    category: string
    arrowElement: React.ReactNode
    Icon?: React.ElementType
    listItems: ListItems[]
}
export interface ListItems {
    imageUrl?: string
    text: string
}

export interface DropdownMenuListProps {
    listItems: ListItems[]
}