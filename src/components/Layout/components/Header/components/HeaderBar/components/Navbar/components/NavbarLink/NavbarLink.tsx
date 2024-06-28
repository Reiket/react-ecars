import React from 'react';
import {NavLink} from 'react-router-dom';
import {cn} from "../../../../../../../../../../shared/utils";

interface PNavLink {
    url: string
    name: string
    icon?: React.JSX.Element
}
const NavbarLink: React.FC<PNavLink> = ({url, name, icon}) => {
    return <li className="navbar-item">
        <NavLink className={({isActive}) => cn("navbar-item__link icon-link text", {"active": isActive})} to={url}>{icon} {name}</NavLink>
    </li>
};

export default NavbarLink;