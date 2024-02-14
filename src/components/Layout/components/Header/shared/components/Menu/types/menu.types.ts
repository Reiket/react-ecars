
import {menuConfigsType, MenuEnums, shipItemType} from "../../../../types/header.types";
import {
    FiltersType
} from "../../../../../../../Pages/components/Home/components/Offers/store/types/offers-reducer.types";


type OtherProps = {
    filters: FiltersType
    onClickToFilters: (shipNumber: number, currency: number) => void
    isBurger?: boolean
}
export type PopupPropsType = menuConfigsType & OtherProps;

export type MenuPropsType = {
    filters: FiltersType
    menuConfigs: Array<menuConfigsType>
    onClickToFilters: (shipNumber: number, currency: number) => void
}

export type TPropsMenuList = {
    isPopupOpen: boolean
    onClickHandler: (id: number) => void
}

export type TMenuItem = {
    onClickHandler: (id: number) => void
    filter: number
    item: shipItemType | string
    type: MenuEnums.selectCurrency | MenuEnums.selectShip
    id: number
}