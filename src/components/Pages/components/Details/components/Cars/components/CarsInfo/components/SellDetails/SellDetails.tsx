import React from 'react';
import SellPossibility from "./components/SellPosibility/SellPossibility";
import {SellDetailsPropsType} from "./types/sell-details.types";
import SellList from "./components/SellList/SellList";
import SellBottom from "./components/SellBottom/SellBottom";
import {selectFilters} from "../../../../../../../Home/components/Offers/store/selector/offers-selector";
import BlockTitle from "../../../../../../../../../../shared/components/Title/BlockTitle";
import {useAppSelector} from "../../../../../../../../../../app/store/hooks";
import {usePrice} from "../../../../../../../../../../shared/hooks/usePrice";

const SellDetails: React.FC<SellDetailsPropsType> = ({detail}) => {
    const filters = useAppSelector(selectFilters)
    const price = usePrice(detail, filters.currency)
    return <div className="info-details__sell sell-details">
        <div className="sell-details__top">
            <SellPossibility detail={detail}/>
            <BlockTitle text={detail.name} classnames={"sell-details__title"}/>
            <p className="sell-details__price">{price[1]}</p>
            <SellList detail={detail}/>
        </div>
        <SellBottom/>
    </div>
}

export default SellDetails;