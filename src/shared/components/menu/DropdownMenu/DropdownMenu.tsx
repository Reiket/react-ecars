import React, {FC} from 'react';
import {cn} from "../../../utils";
import DropdownMenuList from "./components/DropdownMenuList";
import {DropdownMenuProps} from "./types/dropdown-menu.types";



const DropdownMenu: FC<DropdownMenuProps> = ({classnames, category, arrowElement, listItems,  Icon = null}) => {
    const ref = React.useRef<HTMLDivElement>(null)
    return <div ref={ref} className={cn("dropdown-menu", classnames)}>
        {!!Icon && <div className={"dropdown-menu__icon"}>{<Icon/>}</div>}
        <p className="dropdown-menu__category icon-link">{category}<span>{arrowElement}</span></p>
        <DropdownMenuList listItems={listItems}/>
    </div>
};

export default DropdownMenu;