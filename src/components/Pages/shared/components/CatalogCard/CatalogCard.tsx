import type { FC } from "react";
import Card from "../Card/Card";
import { CatalogCardProps } from "./types/catalog-card.types";

const CatalogCard: FC<CatalogCardProps> = ({ item }) => {
  return <Card type={"row"} item={item} currency={0} />;
};

export default CatalogCard;
