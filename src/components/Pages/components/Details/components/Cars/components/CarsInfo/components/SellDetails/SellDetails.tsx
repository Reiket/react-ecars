import React from 'react';
import SellPossibility from "./components/SellPosibility/SellPossibility";
import {SellDetailsPropsType} from "./types/sell-details.types";
import SellList from "./components/SellList/SellList";
import SellBottom from "./components/SellBottom/SellBottom";
import {useSelector} from "react-redux";
import {selectFilters} from "../../../../../../../Home/components/Offers/store/selector/offers-selector";
import BlockTitle from "../../../../../../../../../../shared/components/Title/BlockTitle";

const SellDetails: React.FC<SellDetailsPropsType> = ({detail}) => {
    const filters = useSelector(selectFilters)
    return <div className="info-details__sell sell-details">
        <div className="sell-details__top">
            <SellPossibility detail={detail}/>
            <BlockTitle text={detail.name} classnames={"sell-details__title"}/>
            <div className="sell-details__price">{Object.values(detail.price)[filters.currency]}</div>
            <SellList detail={detail}/>
        </div>
        <SellBottom/>
    </div>
}

export default SellDetails;