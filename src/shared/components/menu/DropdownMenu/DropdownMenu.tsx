import React, {FC, useRef} from 'react';
import {cn} from "../../../utils";
import DropdownMenuList from "./components/DropdownMenuList";
import {DropdownMenuProps} from "./types/dropdown-menu.types";
import {isMobile} from "react-device-detect";

const DropdownMenu: FC<DropdownMenuProps> = ({classnames, name, category, arrowElement, listItems,  icon = null, onClick, isOpen }) => {
    const ref = useRef<HTMLDivElement>(null)
    return <div className="dropdown-menu-container">
        {!!name && (
            <p className={"dropdown-menu-container__name"}>{name}</p>
        )}
        {!!icon && (
            icon
        )}
        <div ref={ref} className={cn("dropdown-menu", classnames, {
            "active": isOpen && isMobile
        })}>
            <button onClick={onClick}
                    className="dropdown-menu__category icon-link">{category}<span>{arrowElement}</span></button>
            <DropdownMenuList listItems={listItems}/>
        </div>
    </div>
};

export default DropdownMenu;