import React from 'react';
import {cn} from "../../../../../../../../shared/utils";
import Burger from "../../shared/Burger/Burger";
import Logo from "../../../../../../../../shared/components/Logo/Logo";
import {useAppSelector} from "../../../../../../../../app/store/hooks";
import {isBurgerSelector} from "../../../../../../store/selectors/layout-selector";

const BarLogo = () => {
    const isBurger = useAppSelector(isBurgerSelector)
    return  <div className={cn("header-bar__logo", {
        "active": isBurger
    })}>
        <Burger isBurger={isBurger}/>
        <Logo classnames={"header-bar__logo_img"}/>
    </div>
};

export default BarLogo;