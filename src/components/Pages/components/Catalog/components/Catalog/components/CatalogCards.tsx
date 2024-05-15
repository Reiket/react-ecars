import React from 'react';
import Card from "../../../../../shared/components/Card/Card";
const fakeItem =   {
    "id": 1,
    "parentId": 1,
    "imageUrl": "/assets/image/offers/02.png",
    "name": "2021 Genesis GV80 2.5T 2021 Genesis GV80 2.5T 2021 Genesis GV80 2.5T ",
    "params": "Used • 15,232 mi • Gasoline",
    "description": "2022 Land Cruiser, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.",
    "price": {
        "USD": 45995,
        "EUR": 46995,
        "GBP": 50995
    },
    "discountPercent": 5,
    "ship": 0,
    "added": "2023-08-22T00:00:00.000Z",
    "views": 150,
    "properties": {
        "make": "Genesis",
        "model": "GV80 2.5T",
        "color": "Black",
        "type": "Crossover",
        "year": 2021,
        "kilometers": 15232,
        "wheels": "18´",
        "location": "Dubai",
        "export_status": true,
        "gearbox": "Automatic",
        "fuel": "Gasoline",
        "seats": 8,
        "cylinders": 8,
        "interior": "Black"
    }
}
const CatalogCards = () => {
    return <div className={"catalog__cards catalog-cards"}>
        <Card isCatalog classnames={"catalog-card"} item={fakeItem} currency={0}/>
        <Card classnames={"catalog-card"} item={fakeItem} currency={0}/>
        <Card classnames={"catalog-card"} item={fakeItem} currency={0}/>
        <Card classnames={"catalog-card"} item={fakeItem} currency={0}/>
    </div>
};

export default CatalogCards;