import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import HeaderUtils from "./components/HeaderUtils/HeaderUtils";
import Logo from "../../../../../../shared/components/Logo/Logo";
import Burger from "./shared/Burger/Burger";
import GreenButton from "../../../../../../shared/components/GreenButton/GreenButton";
import {MenuPropsType} from "../../shared/components/Menu/types/menu.types";

const HeaderBottom: React.FC<MenuPropsType> = React.memo(({filters, onClickToFilters, menuConfigs}) => {
    const [isBurger, setIsBurger] = React.useState(false);
    const [isSearch, setIsSearch] = React.useState(false);
    const onClickToSearch = () => {
        setIsSearch((prev) => !prev);
    }


    return (
        <div className="header__bottom header-bottom">
            <div className="header-bottom__container">
                <div className="header-bottom__body">
                    <div className={isBurger ? "header-bottom__logo active" : "header-bottom__logo"}>
                        <Burger setIsBurger={setIsBurger} isBurger={isBurger}/>
                        <Logo classnames={"header-bottom__logo-img"}/>
                    </div>
                    <Navbar onClickToFilters={onClickToFilters} menuConfigs={menuConfigs} filters={filters} isBurger={isBurger}/>
                    <HeaderUtils isSearch={isSearch} onClickToSearch={onClickToSearch}/>
                    <GreenButton type={"button"} classnames={"header-bottom__btn green-button"} text={"Get a quote"}/>
                </div>
            </div>
        </div>
    );
})

export default HeaderBottom;