import {ItemsType} from "../../../types/types";

export type CardPropsType = {
    favItems: Array<ItemsType>
    item: ItemsType
    currency: number
    classnames?: string
}