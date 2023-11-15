import React from 'react';
import HeaderTopMenu from "./components/HeaderTopMenu/HeaderTopMenu";
import HeaderTopList from "./components/HeaderTopList/HeaderTopList";
import {MenuPropsType} from "../../shared/components/Menu/types/menu.types";

const HeaderTop: React.FC<MenuPropsType> = ({onClickToFilters, filters, menuConfigs}) => {
    return (
        <div className="header__top header-top">
            <div className="header-top__container">
                <div className="header-top__body">
                    <div className="header-top__contacts header-contacts">
                        <HeaderTopList/>
                    </div>
                    <HeaderTopMenu onClickToFilters={onClickToFilters} filters={filters} menuConfigs={menuConfigs}/>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;