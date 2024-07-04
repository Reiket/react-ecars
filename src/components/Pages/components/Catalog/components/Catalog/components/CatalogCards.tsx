import React from "react";
import CatalogCard from "src/components/Pages/shared/components/CatalogCard/CatalogCard";

const fakeItem = {
  id: 1,
  parentId: 1,
  isPremium: false,
  isSpecialOffer: false,
  imageUrl: "/",
  description:
    "2022 Land Cruiser, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.",
  price: {
    USD: 45995,
    EUR: 46995,
    GBP: 50995,
  },
  discountPercent: 5,
  ship: 0,
  added: "2023-08-22T00:00:00.000Z",
  views: 150,
  properties: {
    make: "Genesis",
    model: "GV80 2.5T",
    color: "Black",
    type: "Crossover",
    status: "Used",
    year: 2021,
    kilometers: 15232,
    wheels: "18´",
    location: "Dubai",
    export_status: true,
    gearbox: "Automatic",
    fuel: "Gasoline",
    seats: 8,
    cylinders: 8,
    interior: "Black",
  },
};

const CatalogCards = () => {
  return (
    <div className={"catalog__cards catalog-cards"}>
      <CatalogCard item={fakeItem} />
      <CatalogCard item={fakeItem} />
      <CatalogCard item={fakeItem} />
      <CatalogCard item={fakeItem} />
    </div>
  );
};

export default CatalogCards;
