import React from 'react';
import {contacts} from "../../../../../../../shared/Contacts/contacts-aray";

const ShareContacts = () => {
    const shareContacts = [...contacts.slice(0, 2), ...contacts.slice(3, 5)];
    return <>
        {shareContacts.map((item, id) =>
            <li key={id} className="card-share__item">
                <a href={item.url} className="card-share__link">{item.icon}{item.text}</a>
            </li>
        )}
    </>
};

export default ShareContacts;