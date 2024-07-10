import React from "react";
import CatalogCard from "src/components/Pages/shared/components/CatalogCard/CatalogCard";
import { catalogCardItem } from "../constants";

const CatalogCards = () => {
  return (
    <div className={"catalog__cards catalog-cards"}>
      <CatalogCard item={catalogCardItem} />
      <CatalogCard item={catalogCardItem} />
      <CatalogCard item={catalogCardItem} />
      <CatalogCard item={catalogCardItem} />
    </div>
  );
};

export default CatalogCards;
