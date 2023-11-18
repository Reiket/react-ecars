import {ItemsType} from "../../../../../../../../types/types";

export type OffersSliderPropsType = {
    currency: number
    favorites: Array<ItemsType>
    onClickToFavorites: (items: ItemsType) => void
}