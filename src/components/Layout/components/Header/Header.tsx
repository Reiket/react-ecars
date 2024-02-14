import React from 'react';
import HeaderTop from "./components/HeaderTop/HeaderTop";
import {useFilters} from "./hooks/useFilters";
import {menuConfigsType, MenuEnums, shipItem} from "./types/header.types";
import HeaderBottom from "./components/HeaderBottom/HeaderBottom";
const Header: React.FC = () => {
    const { filters, onClickToFilters } = useFilters();
    const currencyItem: Array<string> = ["USD", "EUR", "GBP"];
    const menuConfigs = [
        {
            text: "Ship to:",
            items: shipItem,
            filter: filters.shipNumber,
            type: MenuEnums.selectShip
        },
        {
            text: "Currency:",
            items: currencyItem,
            filter: filters.currency,
            type: MenuEnums.selectCurrency
        }
    ] as Array<menuConfigsType>

    return (
        <header className="header">
            <HeaderTop filters={filters} menuConfigs={menuConfigs} onClickToFilters={onClickToFilters}/>
            <HeaderBottom filters={filters} menuConfigs={menuConfigs} onClickToFilters={onClickToFilters}/>
        </header>
    );
};

export default Header;