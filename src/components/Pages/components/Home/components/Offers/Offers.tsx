import React from 'react';
import {RiArrowRightLine} from "react-icons/ri";
import OffersSlider from "./components/OffersSlider";
import {useDispatch, useSelector} from "react-redux";
import {selectFilters} from "./store/selector/offers-selector";
import {useFilters} from "../../../../../Layout/components/Header/hooks/useFilters";
import NavigationBtn from "../../../../../../shared/components/NavigationBtn/NavigationBtn";
import Title from "../../../../../../shared/components/Title/Title";
import {AppDispatch} from "../../../../../../app/store/types/store.types";
import {fetchOffers} from "./store/thunks/fetchOffers";
import {fetchFavorites} from "../../../Favorites/store/thunks/fetchFavorites";
import AllLink from "../../../../../../shared/components/Title/AllLink";

const Offers = React.memo(() => {
    const {shipNumber, currency} = useSelector(selectFilters)
    const filtersHook = useFilters();
    const dispatch: AppDispatch = useDispatch()
    React.useEffect(() => {
        if (!filtersHook.isFilterLoading) {
            dispatch(fetchOffers(shipNumber))
            dispatch(fetchFavorites(shipNumber))
        }
    }, [shipNumber, filtersHook.isFilterLoading])
    return (
        <section className="section__offers section-offers">
            <div className="section-offers__container">
                <div className="section-offers__top">
                    <Title text={"Special offers"}/>
                    <NavigationBtn classnames={"section-offers"}/>
                    <AllLink text={"See all cars"} link={"/catalog"}>
                        <RiArrowRightLine/>
                    </AllLink>
                </div>
                <OffersSlider currency={currency}/>
            </div>
        </section>
    );
});

export default Offers;








