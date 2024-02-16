import {ClassValue, clsx} from "clsx";
import {ItemsType} from "../types/types";


export const cn = (...inputs: ClassValue[]) => {
    return clsx(inputs)
}
export const checkInFavorites = (itemId: number, favorites: Array<ItemsType>) => {
    const favoriteItem = favorites.find((favItem) => Number(favItem.id) === Number(itemId));
    return favoriteItem !== undefined;
};