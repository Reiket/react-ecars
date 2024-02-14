import React from 'react';
import {cn} from "../../../../../../../../shared/utils";
import {MenuEnums, shipItemType} from "../../../../types/header.types";
import {TMenuItem} from "../types/menu.types";

const MenuItem: React.FC<TMenuItem> = ({item, filter, onClickHandler, type, id}) => {
    return <li onClick={() => onClickHandler(id)} className={cn("header-menu__point", {
        "active": id === filter
    })}>
        {MenuEnums.selectShip === type ? (
            <>
                {item && (item as shipItemType).img &&
                    <img src={(item as shipItemType).img} alt="Flags"/>}
                {item && (item as shipItemType).country && (item as shipItemType).country}
            </>
        ) : (item) as string[]}
    </li>
};

export default MenuItem;