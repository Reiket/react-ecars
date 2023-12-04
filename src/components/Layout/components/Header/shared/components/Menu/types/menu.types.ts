
import {menuConfigsType} from "../../../../types/header.types";
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