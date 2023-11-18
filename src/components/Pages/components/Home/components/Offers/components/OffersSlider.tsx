import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import  { Autoplay, Navigation } from "swiper/modules";
import './styles/swiper.scss';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import OfferLoader from "../../../../../../Other/Loader/OfferLoader";
import {checkInFavorites} from "../../../../../../../utils/checkInFavorites";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsFetchingOffers, selectItems} from "../../../../../../../redux/selectors/offers-selector";
import {selectIsLoading} from "../../../../../../../redux/selectors/favorites-selector";
import {OffersSliderPropsType} from "./types/offers-slider.types";

const OffersSlider: React.FC<OffersSliderPropsType> = ({ currency, favorites, onClickToFavorites }) => {
    const isFetching = useSelector(selectIsFetchingOffers)
    const items = useSelector(selectItems)
    const isLoading = useSelector(selectIsLoading)

    return (
        <div className="section-offers__body">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                autoplay
                slidesPerView={4}
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
                {isFetching ? [...Array(4)].map((_, id) => <SwiperSlide key={id}><OfferLoader /></SwiperSlide>) :
                    items.map((slide) => (
                        <SwiperSlide key={slide.id} className={items.length > 4 ? "section-offers__item item-offers" : "section-offers__item item-offers flex"}>
                            <div className="item-offers__image">
                                <button disabled={isLoading} type={"button"} onClick={() => onClickToFavorites(slide)} className="item-offers__favorite">
                                    {checkInFavorites(slide.id, favorites) ? <AiFillHeart /> : <AiOutlineHeart />}
                                </button>
                                <img src={slide.imageUrl} alt="Car" />
                            </div>
                            <div className="item-offers__info">
                                <h4 className="item-offers__name">{slide.name}</h4>
                                <div className="item-offers__description">{slide.description}</div>
                                <div className="item-offers__bottom">
                                    <div className="item-offers__price">{Object.values(slide.price)[currency]}</div>
                                    <div className="item-offers__discount">{slide.discount}</div>
                                    <Link to={`/${slide.id}`} className="item-offers__details">Details <MdOutlineKeyboardArrowRight /></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default OffersSlider;
