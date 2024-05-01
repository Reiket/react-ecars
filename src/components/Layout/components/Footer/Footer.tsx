import React from 'react';
import FooterItem from "./components/FooterItem/FooterItem";
import FooterCopy from "./components/FooterCopy/FooterCopy";
import {contacts} from "../../../../shared/Contacts/contacts-aray";
import {carsLinks, companyLinks} from "./utils/footer-utils";
import Container from "../../../../shared/components/Container/Container";


const Footer: React.FC = () => {
    return <footer className="footer">
        <Container classnames={"footer"}>
            <div className="footer__body">
                <FooterItem isLogo/>
                <FooterItem title="Company" links={companyLinks}/>
                <FooterItem title="Cars" links={carsLinks}/>
                <FooterItem title="Contacts" links={contacts.slice(4, 6)}/>
            </div>
            <FooterCopy/>
        </Container>
    </footer>
};

export default Footer;