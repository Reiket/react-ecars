import React from 'react';
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
import {cn} from "../../../../../../../../shared/utils";
import {useAppDispatch, useAppSelector} from "../../../../../../../../app/store/hooks";
import {isBurgerSelector, selectIsOpenContactPopup} from "../../../../../../store/selectors/layout-selector";
import usePopupControl from "../../../../../../../../shared/hooks/usePopupControl";
import {actions} from "../../../../../../store/actions/layout-actios";
import {navLinks} from "./utils/navbar-utils";
import NavbarLink from "./components/NavbarLink/NavbarLink";

const Navbar: React.FC = React.memo(() => {
    const popupId = "contact"
    const isOpenContactPopup = useAppSelector(selectIsOpenContactPopup)
    const isBurger = useAppSelector(isBurgerSelector)
    const dispatch = useAppDispatch()

    const {togglePopup } = usePopupControl(isOpenContactPopup, actions.toggleIsOpenContactPopup, popupId);
    const onClickToPopup = () => {
        togglePopup()
        dispatch(actions.toggleIsBurger(false))
    }
    return (
        <nav className="header-bar__navbar navbar">
            <ul className={cn("navbar__list", {
                "active": isBurger
            })}>
                {navLinks.map((item) => <NavbarLink  key={item.id} {...item}/>)}
                <li className={"navbar-item"}><button onClick={onClickToPopup} className={cn("navbar-item__link text")}>Contact</button></li>
                <NavbarMenu/>
            </ul>
        </nav>
    );
})

export default Navbar;