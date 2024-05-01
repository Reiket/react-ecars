import React from "react";

export interface PFooterItems  {
    title: string
    links: FooterLinks[]
}

export interface FooterLinks  {
    url: string
    text?: string
    scroll?: string
    icon?: React.JSX.Element
}

export interface FooterItemsLogo extends PFooterItems {
    isLogo: boolean
}

