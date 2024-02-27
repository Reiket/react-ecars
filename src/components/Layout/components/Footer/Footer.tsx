import React from 'react';
import FooterItem from "./components/FooterItem/FooterItem";
import {scroller} from 'react-scroll';
import FooterCopy from "./components/FooterCopy/FooterCopy";
import {contacts} from "../../../../shared/Contacts/contacts-aray";
import {TFooterLinks} from "./types/footer.types";

const companyLinks = [
    { url: "/about", text: "About Us" },
    { url: "/blog", text: "Blog" },
    { url: "/faq", text: "FAQ" },
] as Array<TFooterLinks>
const carsLinks = [
    {text: "Special offers", scroll: "offers" },
    { url: "/", text: "New cars" },
    { url: "/", text: "Used cars" },
    {text: "Brands", scroll: "brands" },
] as Array<TFooterLinks>
const Footer: React.FC = () => {
    return <footer className="footer">
        <div className="footer__container">
            <div className="footer__body">
                <FooterItem isLogo/>
                <FooterItem title="Company" links={companyLinks}/>
                <FooterItem title="Cars" links={carsLinks}/>
                <FooterItem title="Contacts" links={[...contacts].slice(4, 6)}/>
            </div>
            <FooterCopy/>
        </div>
    </footer>
};

export default Footer;