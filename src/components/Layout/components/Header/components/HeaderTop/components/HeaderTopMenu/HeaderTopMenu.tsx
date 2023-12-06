import React from 'react';
import MenuHelp from "./components/MenuHelp";
import Menu from "../../../../shared/components/Menu/Menu";
import {MenuPropsType} from "../../../../shared/components/Menu/types/menu.types";
const HeaderTopMenu: React.FC<MenuPropsType> = ({menuConfigs, onClickToFilters, filters}) => {
    return (
        <div className="header-top__info info-header-top">
            {menuConfigs.map((item, id) => <Menu key={id} onClickToFilters={onClickToFilters} filters={filters} text={item.text} items={item.items} filter={item.filter} type={item.type}/>) }
            <MenuHelp/>
        </div>
    );
};

export default HeaderTopMenu;