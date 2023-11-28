import React from 'react';
import {RiArrowRightLine} from "react-icons/ri";
import OffersSlider from "./components/OffersSlider";
import {Link} from "react-router-dom";
import {fetchOffers} from "../../../../../../redux/reducers/offers-reducer";
import {fetchFavorites} from "../../../../../../redux/reducers/favorites-reducer";
import {useDispatch, useSelector} from "react-redux";
import {selectFilters} from "../../../../../../redux/selectors/offers-selector";
import {selectFavorites} from "../../../../../../redux/selectors/favorites-selector";
import {AppDispatch} from "../../../../../../redux/store";
import {useFilters} from "../../../../../Layout/components/Header/hooks/useFilters";
import NavigationBtn from "../../../../../Shared/components/NavigationBtn";
import Title from "../../../../../Shared/components/Title";

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








