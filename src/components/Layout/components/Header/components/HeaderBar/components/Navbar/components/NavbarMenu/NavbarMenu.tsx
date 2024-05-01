import React from 'react';
import NavbarInfo from "./components/NavbarInfo";
import NavbarContacts from "./components/NavbarContacts";

const NavbarMenu: React.FC = () => {
    return <div className={"navbar__menu navbar-menu"}>
        <NavbarInfo/>
        <NavbarContacts/>
    </div>
}

export default NavbarMenu;