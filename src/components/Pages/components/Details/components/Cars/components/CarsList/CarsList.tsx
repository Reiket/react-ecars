import React from 'react';
import {CarsListPropsType, items} from "./types/cars-list.types";

const CarsList: React.FC<CarsListPropsType> = ({itemById}) => {
    return <div className="cars__list list-cars">
        {itemById && itemById.properties && <ul className="list-cars__column">
            {Object.entries(itemById.properties).slice(0, 7).map(([key, value]) => (
                <li className="list-cars__item" key={key}>
                    <h5 className="list-cars__title">{key.charAt(0).toUpperCase() + key.slice(1)}</h5>
                    <div className="list-cars__text">{value}</div>
                </li>
            ))}
        </ul>}

        <ul className="list-cars__column">
            {items.map((item, id) => (
                <li key={id} className="list-cars__item">
                    <h5 className="list-cars__title">{item.name}</h5>
                    <div className="list-cars__text">{item.text}</div>
                </li>
            ))}
        </ul>
    </div>
}

export default CarsList;