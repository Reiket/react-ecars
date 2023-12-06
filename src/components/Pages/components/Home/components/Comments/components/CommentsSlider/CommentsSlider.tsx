import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import CommentLoader from "../CommentsLoader/CommentLoader";
import '../../../Offers/components/styles/swiper.scss';
import {useSelector} from "react-redux";
import {selectComments} from "../../store/selector/comments-selector";

const CommentsSlider = () => {
    const items = useSelector(selectComments)
    return (
        <Swiper
            modules={[Navigation,  Autoplay]}
            spaceBetween={24}
            autoplay
            slidesPerView={3}
            breakpoints={{
                300: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                500: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                800: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                }
            }}
            navigation={{
                prevEl: '.comments__prev',
                nextEl: '.comments__next',
            }}
        >
            {items.length === 0 ? [...Array(3)].map((_, id) => <SwiperSlide key={id}>
                <CommentLoader />
            </SwiperSlide>) :  items.map((item) => <SwiperSlide key={item.id} className="comments__slider comments-slider">
                <div className="comments-slider__item">
                    <div className="comments-slider__top">
                        <div className="comments-slider__avatar">
                            <img src={item.avatar} alt="Avatar"/>
                        </div>
                        <div className="comments-slider__info">
                            <div className="comments-slider__fullname">{item.fullName}</div>
                            <div className="comments-slider__brand">{item.model}</div>
                        </div>
                        <div className="comments-slider__rating">
                            {[...Array(5)].map((_, id) => (
                                id < item.rating ? <AiFillStar key={id} /> : <AiOutlineStar key={id} />
                            ))}
                        </div>
                    </div>
                    <p className="comments-slider__text">
                        {item.comment}
                    </p>
                </div>
            </SwiperSlide>)}

        </Swiper>
    );
};

export default CommentsSlider;