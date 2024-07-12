import React from "react";
import CatalogCard from "src/components/Pages/shared/components/CatalogCard/CatalogCard";
import { useCatalogCars } from "../../../hooks/useCatalogCars";
import CardSkeleton from "../../../../../shared/components/Card/CardSkeleton";

const CatalogList = () => {
  const { cars, isLoading } = useCatalogCars();
  return (
    <div className="catalog__list catalog-list">
      {!isLoading ? (
        cars.map((car) => <CatalogCard key={car.id} item={car} />)
      ) : (
        <div>Loading</div>
      )}
      <CardSkeleton cardType={"row"} />
    </div>
  );
};

export default CatalogList;
