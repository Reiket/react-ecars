import React from 'react';
import {PiMapPinFill} from "react-icons/pi";
import ShipPopup from "./Popup/ShipPopup";

const MenuShip = () => {
    return (
        <div className="info-header-top__item info-header-top__item_none">
            <PiMapPinFill/>
            <ShipPopup/>
        </div>
    );
};

export default MenuShip;