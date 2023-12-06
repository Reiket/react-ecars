import React from 'react';
import {contacts} from "../../../../../../../../shared/Contacts/contacts-aray";

const HeaderTopList: React.FC = React.memo(() => (
    <ul className="header-contacts__social">
        {contacts.map((c, index) => <li key={index} className="header-contacts__item">
            <a href={c.url} className="header-contacts__link">{c.icon}
                {c.text && <span>{c.text}</span>}
            </a>
        </li>)}
    </ul>
))

export default HeaderTopList;