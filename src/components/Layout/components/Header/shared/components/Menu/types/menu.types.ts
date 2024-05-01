import {MenuConfigs, MenuEnums, ShipItem} from "../../../../types/header.types";
import {
    FiltersType
} from "../../../../../../../Pages/components/Home/components/Offers/store/types/offers-reducer.types";


export interface HeaderMenu extends MenuConfigs {
    filters: FiltersType
    onClickToFilters: (shipNumber: number, currency: number) => void
    isBurger?: boolean
}

export type TPropsMenuList = {
    isPopupOpen: boolean
    onClickHandler: (id: number) => void
}

export type TMenuItem = {
    onClickHandler: (id: number) => void
    filter: number
    item: ShipItem | string
    type: MenuEnums.selectCurrency | MenuEnums.selectShip
    id: number
}