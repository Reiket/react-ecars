import React from 'react';
import MenuHelp from "./components/MenuHelp/MenuHelp";
import Menu from "../../../../shared/components/Menu/Menu";
import {useFilters} from "../../../../hooks/useFilters";
import {menuConfigs} from "../../../../utils/header-utils";

const PanelMenu: React.FC = () => {
    const { filters, onClickToFilters } = useFilters();
    return (
        <div className="header-panel__menu panel-menu">
            {menuConfigs(filters).map((item, id) => (
                <Menu
                    key={id}
                    onClickToFilters={onClickToFilters}
                    filters={filters}
                    {...item}
                />
            ))
            }
            <MenuHelp/>
        </div>
    );
};

export default PanelMenu;