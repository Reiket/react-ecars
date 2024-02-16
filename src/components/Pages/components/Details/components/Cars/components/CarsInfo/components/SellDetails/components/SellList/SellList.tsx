import React from 'react';
import {SellDetailsPropsType} from "../../types/sell-details.types";
// todo: позирити до offfers там всіх властивостей не треба, зробити окремий тип
const SellList: React.FC<SellDetailsPropsType> = ({detail}) => {
    const checkValue = (value: string | number | boolean) => {
        if (typeof value === "boolean") {
            if (value) {
                return "Can be export"
            } else {
                return "Not can be export"
            }
        } else {
            return value
        }
    }
    return <ul className="sell-details__list">
        {Object.entries(detail.properties).slice(-4).map(([key, value]) => (
            <li key={key} className="sell-details__property">
                <h5 className="sell-details__name">{typeof value === 'boolean' ? "Export type" : key.charAt(0).toUpperCase() + key.slice(1)}</h5>
                <p className="sell-details__text">{checkValue(value)}</p>
            </li>
        ))}
    </ul>
}

export default SellList;