import React from 'react';
import NavbarMenu from "./NavbarMenu";
const Navbar = ({isBurger}) => {
    return (
        <nav className="header-bottom__menu nav-menu">
            <ul className={isBurger ? "nav-menu__list active" : "nav-menu__list"}>
                <li className="nav-menu__item"><a href="/" className="nav-menu__link">All Cars</a></li>
                <li className="nav-menu__item"><a href="/" className="nav-menu__link">About Us</a></li>
                <li className="nav-menu__item"><a href="/" className="nav-menu__link">Blog</a></li>
                <li className="nav-menu__item"><a href="/" className="nav-menu__link">Contact</a></li>
                <NavbarMenu isBurger={isBurger}/>
            </ul>
        </nav>
    );
};

export default Navbar;