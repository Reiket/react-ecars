import {discountPrice, formatPrice} from "../utils";

import {ItemsType} from "../../components/Pages/shared/components/Card/types/card.types";

export const usePrice = (item: ItemsType, currency: number) => {
    const currencyKey = Object.keys(item.price)[currency] as "USD" | "EUR" | "GBP";
    const currencyPrice = Object.values(item.price)[currency];

    const price = formatCurrency(currencyPrice, currencyKey);
    const discountedPrice = calculateDiscountPrice(currencyPrice, item.discountPercent, currencyKey);

    return [price, discountedPrice];
}

const formatCurrency = (price: number, currency: "USD" | "EUR" | "GBP") => {
    return formatPrice(price, { currency });
}

const calculateDiscountPrice = (price: number, discountPercent: number, currency: "USD" | "EUR" | "GBP") => {
    const discountedPrice = discountPrice(price, discountPercent);
    return formatPrice(discountedPrice, { currency });
}