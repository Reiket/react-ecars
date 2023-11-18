import {ItemsType} from "../../../../../../../../../types/types";
import listItems from "../json/listItem.json";

export type CarsListPropsType = {
    itemById: ItemsType
}
type ListItemsType = {
    name: string
    text: string
}
export const items: Array<ListItemsType> =  listItems;