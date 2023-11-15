
import {FiltersType} from "../../../../../../../../redux/reducers/offers-reducer";
import {menuConfigsType} from "../../../../types/header.types";


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