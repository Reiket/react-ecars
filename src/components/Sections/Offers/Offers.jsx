import React from 'react';
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import {RiArrowRightLine} from "react-icons/ri";
import OffersSlider from "./OffersSlider";
import '../../../scss/libs/swiper.scss';
import {Link} from "react-router-dom";
const Offers = ({items, isLoading, isFetching, currency, fetchAddToFav, favorites, fetchRemoveFromFav, fetchFavorites}) => {

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
                <OffersSlider isLoading={isLoading} fetchFavorites={fetchFavorites} fetchRemoveFromFav={fetchRemoveFromFav} favorites={favorites} fetchAddToFav={fetchAddToFav} items={items} isFetching={isFetching} currency={currency}/>
            </div>
        </section>
    );
};

export default Offers;








