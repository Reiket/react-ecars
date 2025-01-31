import { discountPrice, formatPrice } from "../utils";
import { CarType } from "../../app/api/types/cars.types";
import { PriceCurrency } from "../constants/constants";

export const usePrice = (item: CarType, currency: PriceCurrency) => {
  const priceAttributes = item.attributes.price;
  const currencyPrice = priceAttributes[currency];
  const price = formatCurrency(currencyPrice, currency);
  const discountedPrice = item.attributes.discountPercent
    ? calculateDiscountPrice(
        currencyPrice,
        item.attributes.discountPercent,
        currency,
      )
    : price;

  return [price, discountedPrice];
};

const formatCurrency = (price: number, currency: "USD" | "EUR" | "GBP") => {
  return formatPrice(price, { currency });
};

const calculateDiscountPrice = (
  price: number,
  discountPercent: number,
  currency: "USD" | "EUR" | "GBP",
) => {
  const discountedPrice = discountPrice(price, discountPercent);
  return formatPrice(discountedPrice, { currency });
};
