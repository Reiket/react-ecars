import React from 'react';
import MenuHelp from "./components/MenuHelp";
import Menu from "../../../../shared/components/Menu/Menu";
import {MenuPropsType} from "../../../../shared/components/Menu/types/menu.types";
import {useLocation} from "react-router-dom";
import {useAppSelector} from "../../../../../../../../app/store/hooks";
import {selectDetail} from "../../../../../../../Pages/components/Details/store/selector/details-selector";
const HeaderTopMenu: React.FC<MenuPropsType> = ({menuConfigs, onClickToFilters, filters}) => {
    const location = useLocation();
    const {id} = useAppSelector(selectDetail);
    return (
        <div className="header-top__info info-header-top">
            {menuConfigs.slice(location.pathname === `/${id}` ? 1 : 0, 2).map((item, id) => (
                <Menu
                    key={id}
                    onClickToFilters={onClickToFilters}
                    filters={filters}
                    text={item.text}
                    items={item.items}
                    filter={item.filter}
                    type={item.type}
                />
            ))
            }
            <MenuHelp/>
        </div>
    );
};

export default HeaderTopMenu;