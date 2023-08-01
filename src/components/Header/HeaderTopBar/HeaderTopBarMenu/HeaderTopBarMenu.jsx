import React from 'react';
import MenuShip from "./TopBarMenuItem/MenuShip";
import MenuCurrency from "./TopBarMenuItem/MenuCurrency";
import MenuHelp from "./TopBarMenuItem/MenuHelp";

const HeaderTopBarMenu = () => {
    return (
        <div className="header-top__info info-header-top">
            <MenuShip/>
            <MenuCurrency/>
            <MenuHelp/>
        </div>
    );
};

export default HeaderTopBarMenu;