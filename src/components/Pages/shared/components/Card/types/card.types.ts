import { CarType } from "src/app/api/types/cars.types";
import { PriceCurrency } from "src/shared/constants/constants";

export interface CardProps {
  item: CarType;
  currency: PriceCurrency;
  cardType: "row" | "column";
}
