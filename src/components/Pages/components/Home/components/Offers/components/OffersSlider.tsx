import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import './styles/swiper.scss';
import CardLoader from "../../../../../../../shared/components/Card/components/CardLoader/CardLoader";
import {useSelector} from "react-redux";
import {selectIsFetchingOffers, selectItems} from "../store/selector/offers-selector";
import {OffersSliderPropsType} from "./types/offers-slider.types";
import Card from "../../../../../../../shared/components/Card/Card";
import {useWhyDidYouUpdate} from "ahooks";

const amountSlides = 4
const OffersSlider: React.FC<OffersSliderPropsType> = ({ currency, favorites }) => {
    const isFetching = useSelector(selectIsFetchingOffers)
    const items = useSelector(selectItems)
    useWhyDidYouUpdate('OffersSlider', { currency, favorites })
    const classes = items.length > 4 ? "section-offers__item" : "section-offers__item flex"
    return (
        <div className="section-offers__body">

            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                autoplay
                slidesPerView={amountSlides}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    550: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    800: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    }
                }}
                navigation={{
                    prevEl: '.section-offers__prev',
                    nextEl: '.section-offers__next',
                }}
            >
                {isFetching ? [...Array(amountSlides)].map((_, id) => <SwiperSlide key={id}><CardLoader /></SwiperSlide>) :
                    items.map((slide) => (
                        <SwiperSlide key={slide.id} className={items.length > 4 ? "section-offers__item item-offers" : "section-offers__item item-offers flex"}>
                            <Card classnames={classes} favItems={favorites} item={slide} currency={currency}/>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default OffersSlider;