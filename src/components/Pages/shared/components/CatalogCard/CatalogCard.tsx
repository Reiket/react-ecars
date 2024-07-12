import type { FC } from "react";
import Card from "../Card/Card";
import { CatalogCardProps } from "./types/catalog-card.types";

const CatalogCard: FC<CatalogCardProps> = ({ item }) => {
  return <Card cardType={"row"} item={item} currency={"USD"} />;
};

export default CatalogCard;
