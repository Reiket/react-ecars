import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import './styles/swiper.scss';
import CardLoader from "../../../../../../../shared/components/Card/components/CardLoader/CardLoader";
import {selectIsFetchingOffers, selectItems} from "../store/selector/offers-selector";
import {OffersSliderPropsType} from "./types/offers-slider.types";
import Card from "../../../../../../../shared/components/Card/Card";
import {useAppSelector} from "../../../../../../../app/store/hooks";

const amountSlides = 4
const OffersSlider: React.FC<OffersSliderPropsType> = ({ currency}) => {
    const isFetching = useAppSelector(selectIsFetchingOffers)
    const items = useAppSelector(selectItems)
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
                        <SwiperSlide key={slide.id}>
                            <Card classnames={"section-offers__item card"} item={slide} currency={currency}/>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default OffersSlider;
