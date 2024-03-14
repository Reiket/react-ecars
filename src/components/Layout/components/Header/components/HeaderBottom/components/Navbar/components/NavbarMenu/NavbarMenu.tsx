import React from 'react';
import { BiUserCircle} from "react-icons/bi";
import {NavbarPropsType} from "../../types/navbar.types";
import Menu from "../../../../../../shared/components/Menu/Menu";
import {contacts} from "../../../../../../../../../../shared/Contacts/contacts-aray";
import {useLocation} from "react-router-dom";
import {useAppSelector} from "../../../../../../../../../../app/store/hooks";
import {selectDetail} from "../../../../../../../../../Pages/components/Details/store/selector/details-selector";

const NavbarMenu: React.FC<NavbarPropsType> = React.memo(({isBurger, menuConfigs, filters, onClickToFilters}) => {
    const location = useLocation();
    const {id} = useAppSelector(selectDetail);
    return <div className={"nav-menu__bottom"}>
        <div className="nav-menu__info">
            <li className="nav-menu__item">
                <a href="/" className={"nav-menu__sign icon-link"}><BiUserCircle className="header-bottom__icon"/>Sign in</a>
            </li>
            {menuConfigs.slice(location.pathname === `/${id}` ? 1 : 0, 2).map((item, id) => (
                <li key={id} className="nav-menu__popup">
                    <Menu isBurger={isBurger} text={item.text} items={item.items} filter={item.filter} type={item.type} filters={filters}  onClickToFilters={onClickToFilters}/>
                </li>
            ))}
        </div>
        <div className="nav-menu__contacts header-contacts">
            <ul className="header-contacts__social nav-menu__body">
                {[...contacts].slice(4, 6).map((c, index) => (
                    <li key={index} className="header-contacts__item">
                        <a href={c.url} className="header-contacts__link icon-link">{c.icon}
                            {c.text}
                        </a>
                    </li>
                ))}
                <ul className="nav-menu__social">
                    {[...contacts].slice(0, 4).map((c, index) => <li key={index} className="header-contacts__item">
                        <a href={c.url} className="header-contacts__link">{c.icon}</a>
                    </li>)}
                </ul>
            </ul>
        </div>
    </div>
})

export default NavbarMenu;