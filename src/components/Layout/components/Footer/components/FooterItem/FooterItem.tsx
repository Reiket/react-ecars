import React from 'react';
import Logo from "../../../../../../shared/components/Logo/Logo";
import {FooterItemsType} from "../../types/footer.types";
import {contacts} from "../../../../../../shared/Contacts/contacts-aray";
import ItemTitle from "../../../../../../shared/components/Title/ItemTitle";


const FooterItem: React.FC<Partial<FooterItemsType>> = ({isLogo, links, title}) => {
    return  isLogo ? <div className="footer__item">
        <Logo classnames={"footer__logo"}/>
        <p className="footer__text">
            Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis.
        </p>
        <ul className="footer__list">
            {[...contacts].slice(0, 4).map((c, id) => (
                <li key={id}><a href={c.url} className="footer__social">{c.icon}</a></li>
            ))}
        </ul>
    </div> : <div className="footer__item">
        <ItemTitle text={title as string} size={"small"} classnames={"footer__title"}/>
        <ul className="footer__nav nav-footer">
            {links?.map((link, index) => (
                <li key={index} className="nav-footer__item"><a href={link.url} className="nav-footer__link">{link.icon} {link.text}</a></li>
            ))}
        </ul>
    </div>
};

export default FooterItem;