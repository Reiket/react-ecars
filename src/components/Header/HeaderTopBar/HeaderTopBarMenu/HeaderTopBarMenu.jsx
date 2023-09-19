import React from 'react';
import MenuShip from "./TopBarMenuItem/MenuShip";
import MenuCurrency from "./TopBarMenuItem/MenuCurrency";
import MenuHelp from "./TopBarMenuItem/MenuHelp";


const HeaderTopBarMenu = ({changeCurrency, changeShipNumber, shipNumber, currency}) => {
    return (
        <div className="header-top__info info-header-top">
            <MenuShip changeShipNumber={changeShipNumber} shipNumber={shipNumber}/>
            <MenuCurrency changeCurrency={changeCurrency} currency={currency}/>
            <MenuHelp/>
        </div>
    );
};

export default HeaderTopBarMenu;