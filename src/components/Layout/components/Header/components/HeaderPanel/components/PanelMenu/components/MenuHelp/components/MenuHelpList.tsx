import React from 'react';
import {cn} from "../../../../../../../../../../../shared/utils";
import {isMobile} from "react-device-detect";
import {PMenuHelpList} from "../types/menu-help.types";

const MenuHelpList: React.FC<PMenuHelpList> = ({isOpen}) => {
    return  <ul className={cn("menu-help__list", {
        "active": isOpen && isMobile,
    })}>
        <li className={"menu-help__tippi"}>
            I'm sorry, I can't assist you right now. Please try again later or contact support for further assistance.
        </li>
    </ul>
};

export default MenuHelpList;