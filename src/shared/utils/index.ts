import {ClassValue, clsx} from "clsx";
import {ItemsType} from "../types/types";
export const cn = (...inputs: ClassValue[]) => {
    return clsx(inputs)
}
export const checkInFavorites = (itemId: number, favorites: Array<ItemsType>) => {
    const favoriteItem = favorites.find((favItem) => Number(favItem.id) === Number(itemId));
    return favoriteItem !== undefined;
};

export const capitalizeFirstLetter = (str: string) => {
    return (str.charAt(0).toUpperCase() + str.slice(1)).replace("_", "\n");
};

export function formatPrice (price: number | string, options: {
    currency?: "USD" | "EUR" | "GBP",
    notation?: Intl.NumberFormatOptions["notation"]
} = {}) {
    const {currency = "USD", notation = 'standard'} = options
    const numericPrice = typeof  price === "string" ? parseFloat(price) : price
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        notation,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(numericPrice)
}

export const discountPrice = (price: number | string, discount: number) => {
    const numericPrice = typeof price === "string" ? parseFloat(price) : price;
    return numericPrice - (numericPrice * discount) / 100;
}

export const userLanguage = (num: number) => {
    return new Intl.NumberFormat(navigator.language).format(num)
}