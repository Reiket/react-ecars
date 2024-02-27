import React from "react";

export type TFooterItems = {
    title: string
    links: Array<TFooterLinks>
}

export type TFooterLinks = {
    url: string
    text?: string
    scroll?: string
    icon?: React.JSX.Element
}

export type FooterItemsLogo = TFooterItems & {isLogo: boolean}

