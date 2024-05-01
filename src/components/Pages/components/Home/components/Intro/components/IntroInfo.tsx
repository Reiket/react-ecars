import React from 'react';
import {contactLinks} from "../../../../../../../shared/Contacts/contacts-aray";

const IntroInfo = () => {
    return  <ul className="intro__info">
        {contactLinks.map((item, index) => (
            <li key={index} className="intro__item">
                <a className={"icon-link"} href={item.url}>{item.icon}{item.text}</a>
            </li>
        ))}
    </ul>
};

export default IntroInfo;