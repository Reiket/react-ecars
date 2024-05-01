import React from 'react';
import {BiUserCircle} from "react-icons/bi";
import {menuConfigs} from "../../../../../../../utils/header-utils";
import Menu from "../../../../../../../shared/components/Menu/Menu";
import {useFilters} from "../../../../../../../hooks/useFilters";
import {useAppSelector} from "../../../../../../../../../../../app/store/hooks";
import {isBurgerSelector} from "../../../../../../../../../store/selectors/layout-selector";
import NavbarLink from "../../NavbarLink/NavbarLink";

const NavbarInfo = () => {
    const {filters, onClickToFilters} = useFilters()
    const isBurger = useAppSelector(isBurgerSelector)
    return <ul className="navbar-menu__info">
        <NavbarLink url={"/login"} name={"Sign in"} icon={<BiUserCircle/>}/>
        <ul className="navbar-menu__popups">
            {menuConfigs(filters).map((item, id) => (
                <li key={id} className="navbar-menu__popup">
                    <Menu isBurger={isBurger} text={item.text} items={item.items} filter={item.filter} type={item.type}
                          filters={filters} onClickToFilters={onClickToFilters}/>
                </li>
            ))}
        </ul>
    </ul>
};

export default NavbarInfo;