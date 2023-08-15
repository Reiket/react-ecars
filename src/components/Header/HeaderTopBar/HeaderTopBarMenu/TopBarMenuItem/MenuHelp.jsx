import React from 'react';
import {BiSolidHelpCircle} from "react-icons/bi";

function MenuHelp() {
    return (
        <div className="info-header-top__item info-header-top__item_help">
            <BiSolidHelpCircle/>
            <div className="info-header-top__text">Help</div>
            <div className="info-header-top__tippy">I can't help you :(</div>
        </div>
    );
}

export default MenuHelp;