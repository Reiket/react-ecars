import React from 'react';
import {BiSolidHelpCircle} from "react-icons/bi";
import {isMobile} from "react-device-detect";

const MenuHelp: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);

    return (
        <div onClick={() => setIsPopupOpen(prev => !prev)} className="info-header-top__item info-header-top__item_help">
            <BiSolidHelpCircle/>
            <div className="info-header-top__text">Help</div>
            <div className={isPopupOpen && isMobile ? "info-header-top__tippy active" : "info-header-top__tippy"}>I can't help you :(</div>
        </div>
    );
};

export default MenuHelp;