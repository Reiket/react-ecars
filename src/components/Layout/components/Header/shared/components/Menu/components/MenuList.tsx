import React from 'react';
import {cn} from "../../../../../../../../shared/utils";
import {isMobile} from "react-device-detect";
import {menuConfigsType} from "../../../../types/header.types";
import MenuItem from "./MenuItem";
import {TPropsMenuList} from "../types/menu.types";

const MenuList: React.FC<TPropsMenuList & menuConfigsType> = ({isPopupOpen,items, onClickHandler, filter, type  }) => {
    return <ul className={cn("header-menu__list", {
        "header-menu__list_burger active": isPopupOpen && isMobile
    })}>
        {items.map((item, id) => (
            <MenuItem type={type} key={id} item={item} onClickHandler={onClickHandler} id={id} filter={filter}/>
        ))}
    </ul>
};

export default MenuList;