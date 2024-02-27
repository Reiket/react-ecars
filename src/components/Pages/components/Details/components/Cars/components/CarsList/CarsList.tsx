import React from 'react';
import {CarsListPropsType} from "./types/cars-list.types";
import {capitalizeFirstLetter} from "../../../../../../../../shared/utils";
import {checkValue} from "../../../../shared";

const CarsList: React.FC<CarsListPropsType> = ({detail}) => {
    const items = [
        Object.entries(detail.properties).slice(0, 7),
        [
            ...Object.entries(detail.properties).slice(9),
            ...Object.entries(detail.properties).slice(7, 9)
        ]
    ]
    return <div className="cars__list list-cars">
        {
            items.map((item, id) => (
                <ul key={id} className="list-cars__column">
                    {item.map(([key, value]) => (
                        <li className="list-cars__item" key={key}>
                            <h5 className="list-cars__title">{capitalizeFirstLetter(key)}</h5>
                            <p className="list-cars__text">{checkValue(value, key)}</p>
                        </li>
                    ))}
                </ul>
            ))
        }
    </div>
}

export default CarsList;