import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import HeaderUtils from "./components/HeaderUtils/HeaderUtils";
import Logo from "../../../../../../shared/components/Logo/Logo";
import Burger from "./shared/Burger/Burger";
import GreenButton from "../../../../../../shared/components/buttons/GreenButton/GreenButton";
import {MenuPropsType} from "../../shared/components/Menu/types/menu.types";
import {cn} from "../../../../../../shared/utils";
import usePopupControl from "../../../../../../shared/hooks/usePopupControl";
import {useAppSelector} from "../../../../../../app/store/hooks";
import {selectIsOpenGetPopup} from "../../../../store/selectors/layout-selector";
import {actions} from "../../../../store/actions/layout-actios";

const HeaderBottom: React.FC<MenuPropsType> = React.memo(({filters, onClickToFilters, menuConfigs}) => {
    const [isBurger, setIsBurger] = React.useState(false);
    const [isSearch, setIsSearch] = React.useState(false);
    const isOpenPopup = useAppSelector(selectIsOpenGetPopup)
    const {togglePopup} = usePopupControl(isOpenPopup, actions.toggleIsOpenGetPopup);
    const onClickToSearch = () => {
        setIsSearch((prev) => !prev);
    }
    return  <div className="header__bottom header-bottom">
        <div className="header-bottom__container">
            <div className="header-bottom__body">
                <div className={cn("header-bottom__logo", {
                    "active": isBurger
                })}>
                    <Burger setIsBurger={setIsBurger} isBurger={isBurger}/>
                    <Logo classnames={"header-bottom__logo-img"}/>
                </div>
                <Navbar setIsBurger={setIsBurger} onClickToFilters={onClickToFilters} menuConfigs={menuConfigs} filters={filters} isBurger={isBurger}/>
                <HeaderUtils isSearch={isSearch} onClickToSearch={onClickToSearch}/>
                <GreenButton onClick={togglePopup} type={"button"} classnames={"header-bottom__btn"} text={"Get a quote"}/>
            </div>
        </div>
    </div>
})

export default HeaderBottom;