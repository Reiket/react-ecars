import React from 'react';
import {RiMailFill, RiWhatsappFill} from "react-icons/ri";
import MenuContacts from "./HeaderTopBarMenu/TopBarMenuItem/MenuContacts";

function HeaderTopBarList() {
    return (
        <ul className="header-contacts__social">
            <MenuContacts/>
            <li className="header-contacts__item">
                <a href={"tel:+971 55 811 9024"} className="header-contacts__link"><RiWhatsappFill/>
                    <span>+971 55 811 9024</span>
                </a>
            </li>
            <li className="header-contacts__item">
                <a href={"request@example.com"} className="header-contacts__link"><RiMailFill/>
                    <span>request@example.com</span>
                </a>
            </li>
        </ul>
    );
}

export default HeaderTopBarList;