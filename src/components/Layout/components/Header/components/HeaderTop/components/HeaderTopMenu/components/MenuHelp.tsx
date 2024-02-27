import React from 'react';
import {BiSolidHelpCircle} from "react-icons/bi";
import {isMobile} from "react-device-detect";
import {cn} from "../../../../../../../../../shared/utils";

const MenuHelp: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    return (
        <div onClick={() => setIsPopupOpen(prev => !prev)} className="info-header-top__item help-info">
            <BiSolidHelpCircle/>
            <div className="help-info__text info-text menu-text">Help</div>
            <div className={cn("help-info__tippi", {
                "active": isPopupOpen && isMobile,
            })}>I'm sorry, I can't assist you right now. Please try again later or contact support for further assistance.</div>
        </div>
    );
};

export default MenuHelp;