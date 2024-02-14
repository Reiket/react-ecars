import {ItemsType} from "../../../../../../../../../shared/types/types";
import listItems from "../json/listItem.json";

export type CarsListPropsType = {
    detail: ItemsType
}
type ListItemsType = {
    name: string
    text: string
}
export const items: Array<ListItemsType> =  listItems;