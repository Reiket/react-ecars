import navbar from "../json/navbar.json";
import {MenuPropsType} from "../../../../../shared/components/Menu/types/menu.types";

type navbarType = {
    name: string
    url: string
}
export const navbarMenu: Array<navbarType> = navbar

type OwnPropsType = {
    isBurger: boolean
}

export type NavbarPropsType = OwnPropsType & MenuPropsType