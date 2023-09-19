import React from 'react';
import {Link} from "react-router-dom";
import navbar from "../../../../json/navbar.json"
import NavbarMenuContainer from "./NavbarMenuContainer";
const Navbar = ({isBurger}) => {

    return (
        <nav className="header-bottom__menu nav-menu">
            <ul className={isBurger ? "nav-menu__list active" : "nav-menu__list"}>
                {navbar.map((item, id) => <li key={id} className="nav-menu__item"><Link to={item.url} className="nav-menu__link">{item.name}</Link></li>)}
                <NavbarMenuContainer isBurger={isBurger}/>
            </ul>
        </nav>
    );
};

export default Navbar;