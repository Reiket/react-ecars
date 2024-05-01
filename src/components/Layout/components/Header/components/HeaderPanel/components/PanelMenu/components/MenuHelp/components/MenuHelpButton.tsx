import React from 'react';
import {BiSolidHelpCircle} from "react-icons/bi";
import {PMenuHelpButton} from "../types/menu-help.types";

const MenuHelpButton: React.FC<PMenuHelpButton> = ({onClick}) => {
    return <button className={"icon-link menu-text"} onClick={onClick}>
        <BiSolidHelpCircle/>
        Help
    </button>
};

export default MenuHelpButton;