import React from 'react';
import {Link} from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
import {navbarMenu, NavbarPropsType, TNavBar} from "./types/navbar.types";
import {cn} from "../../../../../../../../shared/utils";
import {useAppSelector} from "../../../../../../../../app/store/hooks";
import {selectIsOpenContactPopup} from "../../../../../../store/selectors/layout-selector";
import usePopupControl from "../../../../../../../../shared/hooks/usePopupControl";
import {actions} from "../../../../../../store/actions/layout-actios";

const Navbar: React.FC<NavbarPropsType & TNavBar> = React.memo(({isBurger, onClickToFilters, filters, menuConfigs, setIsBurger}) => {
    const isOpenContactPopup = useAppSelector(selectIsOpenContactPopup)
    const {togglePopup} = usePopupControl(isOpenContactPopup, actions.toggleIsOpenContactPopup);
    const onClickToContact = () => {
        setIsBurger(false)
        togglePopup()
    }
    return (
        <nav className="header-bottom__menu nav-menu">
            <ul className={cn("nav-menu__list", {
                "active": isBurger
            })}>
                {navbarMenu.map((item, id) => <li key={id} className="nav-menu__item"><Link to={item.url} className="nav-menu__link">{item.name}</Link></li>)}
                <li className={"nav-menu__item"}><button onClick={onClickToContact} className={"nav-menu__link"}>Contact</button></li>
                {isBurger && <li className="nav-menu__item"><Link to={"/favorites"} className="nav-menu__link">{"Favorites"}</Link></li>}
                <NavbarMenu onClickToFilters={onClickToFilters} menuConfigs={menuConfigs} filters={filters} isBurger={isBurger}/>
            </ul>
        </nav>
    );
})

export default Navbar;