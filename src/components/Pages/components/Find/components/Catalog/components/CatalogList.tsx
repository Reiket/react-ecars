import React, { FC, ReactNode } from "react";
import CatalogCard from "src/components/Pages/shared/components/CatalogCard/CatalogCard";
import { useCatalogCars } from "../../../hooks/useCatalogCars";
import CardSkeleton from "src/components/Pages/shared/components/Card/CardSkeleton";
import { CATALOG_CARDS_COUNT, catalogSendPoints } from "../constants";
import CatalogSend from "./CatalogSend";

interface Props {
  children: ReactNode;
  index: number;
}

const CatalogList = () => {
  const { cars, isLoading } = useCatalogCars();
  return (
    <div className="catalog__list catalog-list">
      {!isLoading
        ? cars.map((car, index) => (
            <RenderWithSend key={car.id} index={index}>
              <CatalogCard item={car} />
            </RenderWithSend>
          ))
        : [...Array(CATALOG_CARDS_COUNT)].map((_, id) => (
            <RenderWithSend key={id} index={id}>
              <CardSkeleton cardType={"row"} />
            </RenderWithSend>
          ))}
    </div>
  );
};

const RenderWithSend: FC<Props> = ({ children, index }) => {
  return (
    <React.Fragment>
      {index === 2 && (
        <CatalogSend key="catalog-send" points={catalogSendPoints} />
      )}
      {children}
    </React.Fragment>
  );
};

export default CatalogList;
