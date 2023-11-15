import React from 'react';
import {Link} from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
import {navbarMenu, NavbarPropsType} from "./types/navbar.types";

const Navbar: React.FC<NavbarPropsType> = ({isBurger, onClickToFilters, filters, menuConfigs}) => {
    return (
        <nav className="header-bottom__menu nav-menu">
            <ul className={isBurger ? "nav-menu__list active" : "nav-menu__list"}>
                {navbarMenu.map((item, id) => <li key={id} className="nav-menu__item"><Link to={item.url} className="nav-menu__link">{item.name}</Link></li>)}
                <NavbarMenu onClickToFilters={onClickToFilters} menuConfigs={menuConfigs} filters={filters} isBurger={isBurger}/>
            </ul>
        </nav>
    );
};

export default Navbar;