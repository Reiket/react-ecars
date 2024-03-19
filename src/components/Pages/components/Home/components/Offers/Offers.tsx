import React from 'react';
import {RiArrowRightLine} from "react-icons/ri";
import OffersSlider from "./components/OffersSlider";
import {selectFilters} from "./store/selector/offers-selector";
import {useFilters} from "../../../../../Layout/components/Header/hooks/useFilters";
import NavigationBtn from "../../../../../../shared/components/NavigationBtn/NavigationBtn";
import {fetchOffers} from "./store/thunks/fetchOffers";
import AllLink from "../../../../../../shared/components/Title/AllLink";
import {useAppDispatch, useAppSelector} from "../../../../../../app/store/hooks";
import {Title} from "../../../../../../shared/components/Title/Title";

const Offers = React.memo(() => {
    const {shipNumber, currency} = useAppSelector(selectFilters)
    const {isFilterLoading} = useFilters();
    const dispatch = useAppDispatch()
    React.useEffect(() => {
        if (!isFilterLoading) {
            dispatch(fetchOffers(shipNumber))
        }
    }, [shipNumber, isFilterLoading])
    return <section className="section__offers section-offers">
        <div className="section-offers__container">
            <div className="section-offers__top">
                <Title tag={"h2"} classnames={"home-title"} text={"Special offers"}/>
                <NavigationBtn classnames={"section-offers"}/>
                <AllLink text={"See all cars"} link={"/catalog"}>
                    <RiArrowRightLine/>
                </AllLink>
            </div>
            <OffersSlider currency={currency}/>
        </div>
    </section>
});

export default Offers;








