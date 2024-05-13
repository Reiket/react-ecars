import React, {FC} from 'react';
import {DropdownMenuListProps} from "../types/dropdown-menu.types";

const DropdownMenuList: FC<DropdownMenuListProps> = ({listItems}) => {
    return <ul className={"dropdown-menu__list"}>
        {listItems.map((item) => <li className="dropdown-menu__point">
            {!!item.imageUrl && (
                <img src={item.imageUrl} alt="Flags"/>
            )}
            {item.text}
        </li>)}
    </ul>
};

export default DropdownMenuList;