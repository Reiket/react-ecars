import React from 'react';
import Logo from "../../../../../../shared/components/Logo/Logo";
import {FooterItemsLogo, TFooterItems} from "../../types/footer.types";
import {contacts} from "../../../../../../shared/Contacts/contacts-aray";
import ItemTitle from "../../../../../../shared/components/Title/ItemTitle";
import {Link} from "react-router-dom";
import {scroller} from "react-scroll";

const FooterItemCompany:React.FC<Partial<TFooterItems>> = ({links, title}) => {
    const scrollToBlock = (item: string) => {
        scroller.scrollTo(item, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };
    return <div className="footer__item">
        <ItemTitle text={title as string} size={"small"} classnames={"footer__title"}/>
        <ul className="footer__nav nav-footer">
            {links?.map((link, index) => (
                <li key={index} className="nav-footer__item">
                    {link.scroll && scrollToBlock ? <button onClick={() => scrollToBlock(link.scroll ? link.scroll : "")} className="nav-footer__link">{link.text}</button> : <a href={link.url}
                                        className="nav-footer__link">{link.icon} {link.text}</a>}
                </li>
            ))}
        </ul>
    </div>
}
const FooterItem: React.FC<Partial<FooterItemsLogo>> = ({isLogo, links, title}) => {
    return isLogo ? <div className="footer__item">
        <Logo classnames={"footer__logo"}/>
        <p className="footer__text">
            Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae
            et leo duis.
        </p>
        <ul className="footer__list">
            {[...contacts].slice(0, 4).map((c, id) => (
                <li key={id}><Link to={c.url} className="footer__social">{c.icon}</Link></li>
            ))}
        </ul>
    </div> : <FooterItemCompany links={links} title={title} />
};

export default FooterItem;