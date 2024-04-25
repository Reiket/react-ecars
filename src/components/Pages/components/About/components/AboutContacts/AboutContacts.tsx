import React from 'react';
import Text from "../../../../../../shared/components/Title/Text";
import {contacts} from "../../../../../../shared/Contacts/contacts-aray";
import {contactsText} from "../../utils/about-text";
import Section from "../../../../../../shared/components/Section/Section";

const AboutContacts = () => {
    return <Section name={"contacts-about"} classnames={"about-section"}>
        <div className="contacts-about__body">
            <Text text={contactsText}/>
            <div className="contacts-about__social">
                {contacts.slice(4, 6).map((item, id) =>
                    <a key={id} className={"contacts-about__link icon-link"}
                       href={item.url}>{item.icon}{item.text}</a>)}
            </div>
        </div>
    </Section>
};

export default AboutContacts;