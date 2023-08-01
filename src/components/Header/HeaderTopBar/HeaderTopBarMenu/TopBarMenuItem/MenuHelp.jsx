import React from 'react';
import {BiSolidHelpCircle} from "react-icons/bi";

function MenuHelp() {
    return (
        <div className="info-header-top__item">
            <BiSolidHelpCircle/>
            <div className="info-header-top__text">Help</div>
        </div>
    );
}

export default MenuHelp;