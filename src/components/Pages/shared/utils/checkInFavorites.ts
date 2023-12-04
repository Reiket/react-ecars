import {ItemsType} from "../../../../shared/types/types";

export const checkInFavorites = (itemId: number, favorites: Array<ItemsType>) => {
    const favoriteItem = favorites.find((favItem) => Number(favItem.id) === Number(itemId));
    return favoriteItem !== undefined;
};