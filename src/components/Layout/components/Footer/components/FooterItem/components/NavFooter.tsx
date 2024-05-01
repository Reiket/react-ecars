import React from 'react';
import {TFooterLinks} from "../../../types/footer.types";
import NavFooterBtn from "./NavFooterBtn";
import RouterLink from "../../../../../../../shared/components/links/RouterLink";
import {PNavFooter} from "../types/footer-item.types";


const NavFooter: React.FC<PNavFooter> = ({links}) => {
    const renderNavFooter = (link: TFooterLinks) => {
        if (link.scroll) {
            return <NavFooterBtn scroll={link.scroll} text={link.text!}/>
        } else {
            return <RouterLink url={link.url} classnames={"nav-footer__link icon-link"}>{link.icon} {link.text}</RouterLink>
        }
    }
    return <nav className="footer__nav nav-footer">
        <ul className="nav-footer__list">
            {links!.map((link, index) => (
                <li key={index} className="nav-footer__item">
                    {renderNavFooter(link)}
                </li>
            ))}
        </ul>
    </nav>
};

export default NavFooter;