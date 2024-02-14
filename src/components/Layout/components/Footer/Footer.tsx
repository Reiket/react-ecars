import React from 'react';
import FooterItem from "./components/FooterItem/FooterItem";
import FooterCopy from "./components/FooterCopy/FooterCopy";
import {contacts, ContactsArrayType} from "../../../../shared/Contacts/contacts-aray";
const companyLinks = [
    { url: "/", text: "About Us" },
    { url: "/", text: "Blog" },
    { url: "/", text: "FAQ" },
] as Array<ContactsArrayType>
const carsLinks = [
    { url: "/", text: "Special offers" },
    { url: "/", text: "New cars" },
    { url: "/", text: "Used cars" },
    { url: "/", text: "Brands" },
] as Array<ContactsArrayType>
const Footer: React.FC = () => {
    return (
        <footer className="footer">
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
    );
};

export default Footer;