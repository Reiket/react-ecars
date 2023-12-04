import React from 'react';
import {RiArrowRightLine} from "react-icons/ri";
import OffersSlider from "./components/OffersSlider";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectFilters} from "./store/selector/offers-selector";
import {selectFavorites} from "../../../Favorites/store/selector/favorites-selector";
import {useFilters} from "../../../../../Layout/components/Header/hooks/useFilters";
import NavigationBtn from "../../../../../../shared/components/NavigationBtn/NavigationBtn";
import Title from "../../../../../../shared/components/Title/Title";
import {AppDispatch} from "../../../../../../app/store/types/store.types";
import {fetchOffers} from "./store/thunks/fetchOffers";
import {fetchFavorites} from "../../../Favorites/store/thunks/fetchFavorites";

const Offers = () => {
    const {shipNumber, currency} = useSelector(selectFilters)
    const favorites = useSelector(selectFavorites)
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
                    <Link to={"/catalog"} className="section-offers__all all">See all cars <RiArrowRightLine/></Link>
                </div>
                <OffersSlider favorites={favorites} currency={currency}/>
            </div>
        </section>
    );
};

export default Offers;








