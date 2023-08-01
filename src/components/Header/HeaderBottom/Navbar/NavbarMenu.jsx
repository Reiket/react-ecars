import React from 'react';
import { BiUserCircle} from "react-icons/bi";
import {RiMailFill, RiWhatsappFill} from "react-icons/ri";
import ShipPopup from "../../HeaderTopBar/HeaderTopBarMenu/TopBarMenuItem/Popup/ShipPopup";
import CurrencyPopup from "../../HeaderTopBar/HeaderTopBarMenu/TopBarMenuItem/Popup/CurrencyPopup";
import MenuContacts from "../../HeaderTopBar/HeaderTopBarMenu/TopBarMenuItem/Popup/MenuContacts";

const NavbarMenu = ({isBurger}) => {
    return (
        <div className={"nav-menu__bottom"}>
            <div className="nav-menu__info">
                <li className="nav-menu__item"><a href="/" className={"nav-menu__link"}><BiUserCircle className="header-bottom__icon"/>Sign in</a></li>
                <li className="nav-menu__ship">
                    <ShipPopup isBurger={isBurger}/>
                </li>
                <li className="nav-menu__ship">

                    <CurrencyPopup isBurger={isBurger}/>
                </li>
            </div>
            <div className="nav-menu__contacts header-contacts">
                <ul className="header-contacts__social nav-menu__body">
                    <li className="header-contacts__item">
                        <a href={"tel:+971 55 811 9024"} className="header-contacts__link nav-menu__link"><RiWhatsappFill/>
                            +971 55 811 9024
                        </a>
                    </li>
                    <li className="header-contacts__item">
                        <a href={"request@example.com"} className="header-contacts__link nav-menu__link"><RiMailFill/>
                            request@example.com
                        </a>
                    </li>
                    <ul className="nav-menu__social">
                       <MenuContacts/>
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export default NavbarMenu;