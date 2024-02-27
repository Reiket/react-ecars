import React from 'react';
import {SellDetailsPropsType} from "../../types/sell-details.types";
import {capitalizeFirstLetter} from "../../../../../../../../../../../../shared/utils";
import {checkValue} from "../../../../../../../../shared";

const SellList: React.FC<SellDetailsPropsType> = ({detail}) => {
    return <ul className="sell-details__list">
        {Object.entries(detail.properties).slice(5, 9).map(([key, value]) => (
            <li key={key} className="sell-details__property">
                <h5 className="sell-details__name">{capitalizeFirstLetter(key)}</h5>
                <p className="sell-details__text">{checkValue(value, key)}</p>
            </li>
        ))}
    </ul>
}

export default SellList;