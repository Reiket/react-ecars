import React from 'react';
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import {RiArrowRightLine} from "react-icons/ri";
import OffersSlider from "./components/OffersSlider";
import {Link} from "react-router-dom";
import {fetchOffers} from "../../../../../../redux/reducers/offers-reducer";
import {fetchAddToFav, fetchFavorites, fetchRemoveFromFav} from "../../../../../../redux/reducers/favorites-reducer";
import {useDispatch, useSelector} from "react-redux";
import {selectFilters} from "../../../../../../redux/selectors/offers-selector";
import {checkInFavorites} from "../../../../../../utils/checkInFavorites";
import {selectFavorites} from "../../../../../../redux/selectors/favorites-selector";
import {AppDispatch} from "../../../../../../redux/store";
import {ItemsType} from "../../../../../../types/types";
const Offers = () => {
    const {shipNumber, currency} = useSelector(selectFilters)
    const favorites = useSelector(selectFavorites)
    const dispatch: AppDispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchOffers(shipNumber))
    }, [shipNumber])
    React.useEffect(() => {
        dispatch(fetchFavorites(shipNumber))
    }, [shipNumber])
    const onClickToFavorites = (item: ItemsType) => {
        if (checkInFavorites(item.id, favorites)) {
            dispatch(fetchRemoveFromFav(item.id))
        } else {
            dispatch(fetchAddToFav(item))
        }
    };
    return (
        <section className="section__offers section-offers">
            <div className="section-offers__container">
                <div className="section-offers__top">
                    <h2 className="section-offers__title title">Special offers</h2>
                    <div className="section-offers__navigation navigation">
                        <button className="section-offers__button slider-button section-offers__prev"><MdOutlineKeyboardArrowLeft/></button>
                        <button className="section-offers__button slider-button section-offers__next"><MdOutlineKeyboardArrowRight/></button>
                    </div>
                    <Link to={"/catalog"} className="section-offers__all all">See all cars <RiArrowRightLine/></Link>
                </div>
                <OffersSlider onClickToFavorites={onClickToFavorites} favorites={favorites} currency={currency}/>
            </div>
        </section>
    );
};

export default Offers;








