import React from 'react';
import {MdKeyboardArrowDown} from "react-icons/md";

const ShipPopup = ({isBurger}) => {
    return (
        <>
            <span className={isBurger ? "info-header-top__text info-header-top__text_burger" : "info-header-top__text"}>Ship to:</span>
            <img src="/assets/image/icons/flags/canada.svg" alt="Flags"/>
            <div className={isBurger ? "header-menu header-menu_nav" : "header-menu"}>
                Canada
                <MdKeyboardArrowDown className={"header-menu__arrow"}/>
                <ul className={isBurger ? "header-menu__list header-menu__list_burger" : "header-menu__list"}>
                    <li className="header-menu__point">
                        <img src="/assets/image/icons/flags/usa.svg" alt="Flags"/>
                        USA
                    </li>
                    <li className="header-menu__point">
                        <img src="/assets/image/icons/flags/europe.svg" alt="Flags"/>
                        EU
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ShipPopup;