import React from 'react';
import {headerContacts} from "../../../../../../../utils/header-utils";
import {cn} from "../../../../../../../../../../../shared/utils";

const NavbarContacts = () => {
    return <div className="navbar-menu__contacts navbar-contacts">
        {headerContacts.map((contact, id) => {
            return <ul key={id} className={cn("navbar-contacts__body", {"social": !contact.isText})}>
                {contact.items.map((item, id) => (
                    <li key={id} className="navbar-contacts__item">
                        <a href={item.url} className="navbar-contacts__link icon-link">{item.icon}
                            {contact.isText && item.text}
                        </a>
                    </li>
                ))}
            </ul>
        })}
    </div>
};


export default NavbarContacts;