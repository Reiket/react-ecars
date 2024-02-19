import React from 'react';
import {SellDetailsPropsType} from "../../types/sell-details.types";
import {capitalizeFirstLetter} from "../../../../../../../../../../../../shared/utils";
const checkValue = (value: string | number | boolean) => {
    return typeof value === "boolean" ? (value ? "Can be exported" : "Not can be exported") : value;
}
const SellList: React.FC<SellDetailsPropsType> = ({detail}) => {
    return <ul className="sell-details__list">
        {Object.entries(detail.properties).slice(-4).map(([key, value]) => (
            <li key={key} className="sell-details__property">
                <h5 className="sell-details__name">{capitalizeFirstLetter(key)}</h5>
                <p className="sell-details__text">{checkValue(value)}</p>
            </li>
        ))}
    </ul>
}

export default SellList;