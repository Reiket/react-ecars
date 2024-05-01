import React from 'react';
import {headerContacts} from "../../../../utils/header-utils";

const PanelContacts: React.FC = () => (
    <div className="header-panel__contacts panel-contacts">
        <ul className="panel-contacts__social">
            {headerContacts.map((contact) => {
                return contact.items.map((item, index) =>
                    <li key={index} className="panel-contacts__item">
                        <a href={item.url} className="panel-contacts__link icon-link menu-text">
                            {item.icon} {contact.isText && <span>{item.text}</span>}
                        </a>
                    </li>)
            })}
        </ul>
    </div>
)

export default PanelContacts;