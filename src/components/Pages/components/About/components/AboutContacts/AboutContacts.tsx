import React from 'react';
import Text from "../../../../../../shared/components/Title/Text";
import {contacts} from "../../../../../../shared/Contacts/contacts-aray";
import {contactsText} from "../../utils/about-text";

const AboutContacts = () => {
    return <div className="about__contacts contacts-about">
        <div className="contacts-about__body">
            <Text classnames={"contacts-about__text"} text={contactsText}/>
            <div className="contacts-about__social">
                {contacts.slice(4, 6).map((item, id) => <a key={id} className={"contacts-about__link icon-link"} href={item.url}>{item.icon}{item.text}</a>)}
            </div>
        </div>
    </div>
};

export default AboutContacts;