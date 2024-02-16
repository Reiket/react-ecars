import React from 'react';
import {CarsListPropsType, items} from "./types/cars-list.types";

const CarsList: React.FC<CarsListPropsType> = ({detail}) => {
    return <div className="cars__list list-cars">
        {detail.properties && <ul className="list-cars__column">
            {Object.entries(detail.properties).slice(0, 7).map(([key, value]) => (
                <li className="list-cars__item" key={key}>
                    <h5 className="list-cars__title">{key.charAt(0).toUpperCase() + key.slice(1)}</h5>
                    <p className="list-cars__text">{value}</p>
                </li>
            ))}
        </ul>}

        <ul className="list-cars__column">
            {items.map((item, id) => (
                <li key={id} className="list-cars__item">
                    <h5 className="list-cars__title">{item.name}</h5>
                    <p className="list-cars__text">{item.text}</p>
                </li>
            ))}
        </ul>
    </div>
}

export default CarsList;