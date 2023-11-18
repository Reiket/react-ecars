import React from 'react';
import SellPossibility from "./components/SellPosibility/SellPossibility";
import {SellDetailsPropsType} from "./types/sell-details.types";
import SellList from "./components/SellList/SellList";
import SellBottom from "./components/SellBottom/SellBottom";
import {useSelector} from "react-redux";
import {selectFilters} from "../../../../../../../../../../redux/selectors/offers-selector";

const SellDetails: React.FC<SellDetailsPropsType> = ({itemById}) => {
    const filters = useSelector(selectFilters)
    return <div className="info-details__sell sell-details">
        <div className="sell-details__top">
            <SellPossibility itemById={itemById}/>
            <h3 className="sell-details__title">{itemById.name}</h3>
            <div className="sell-details__price">{itemById.price && Object.values(itemById.price)[filters.currency]}</div>
            <SellList itemById={itemById}/>
        </div>
        <SellBottom/>
    </div>
}

export default SellDetails;