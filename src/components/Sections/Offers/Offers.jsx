import React from 'react';
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import {RiArrowRightLine} from "react-icons/ri";
import OffersSlider from "./OffersSlider";
import '../../../scss/libs/swiper.scss';
const Offers = () => {
    return (
        <section className="section__offers section-offers">
            <div className="section-offers__container">
                <div className="section-offers__top">
                    <h2 className="section-offers__title title">Special offers</h2>
                    <div className="section-offers__navigation">
                        <button className="section-offers__button slider-button section-offers__prev"><MdOutlineKeyboardArrowLeft/></button>
                        <button className="section-offers__button slider-button section-offers__next"><MdOutlineKeyboardArrowRight/></button>
                    </div>
                    <a href="/" className="section-offers__all all">See all cars <RiArrowRightLine/></a>
                </div>
                <OffersSlider/>
            </div>
        </section>
    );
};

export default Offers;