import React from 'react';
import Logo from "../../../../../../../shared/components/Logo/Logo";
import {contacts} from "../../../../../../../shared/Contacts/contacts-aray";
import {footerItemLogoText} from "../../../utils/footer-utils";
import RouterLink from "../../../../../../../shared/components/links/RouterLink";

const FooterItemLogo = () => {
    const social = contacts.slice(0, 4)
    return  <div className="footer__item">
        <Logo classnames={"footer__logo"}/>
        <p className="footer__text">{footerItemLogoText}</p>
        <ul className="footer__list">
            {social.map((c, id) => (
                <li key={id}>
                    <RouterLink url={c.url} classnames={"footer__social"}>
                        {c.icon}
                    </RouterLink>
                </li>
            ))}
        </ul>
    </div>
};

export default FooterItemLogo;