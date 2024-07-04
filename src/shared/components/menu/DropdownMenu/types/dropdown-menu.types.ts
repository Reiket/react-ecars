import React from "react";

export interface DropdownMenuProps {
    classnames?: string
    isOpen: boolean
    onClick: () => void
    category: string
    arrowElement: React.ReactNode
    icon?: React.ReactNode
    listItems: ListItems[]
    name?: string
}
export interface ListItems {
    imageUrl?: string
    text: string
}

export interface DropdownMenuListProps {
    listItems: ListItems[]
}