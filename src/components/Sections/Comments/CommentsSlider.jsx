import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import CommentLoader from "../../Loader/CommentLoader";

const CommentsSlider = ({items}) => {
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
                prevEl: '.about__prev',
                nextEl: '.about__next',
            }}
        >
            {items.length === 0 ? [...Array(3)].map((_, id) => <SwiperSlide key={id}>
                <CommentLoader />
            </SwiperSlide>) :  items.map((item) => <SwiperSlide key={item.id} className="about__slider about-slider">
                <div className="about-slider__item">
                    <div className="about-slider__top">
                        <div className="about-slider__avatar">
                            <img src={item.avatar} alt="Avatar"/>
                        </div>
                        <div className="about-slider__info">
                            <div className="about-slider__fullname">{item.fullName}</div>
                            <div className="about-slider__brand">{item.model}</div>
                        </div>
                        <div className="about-slider__rating">
                            {[...Array(5)].map((_, id) => (
                                id < item.rating ? <AiFillStar key={id} /> : <AiOutlineStar key={id} />
                            ))}
                        </div>
                    </div>
                    <p className="about-slider__text">
                        {item.comment}
                    </p>
                </div>
            </SwiperSlide>)}

        </Swiper>
    );
};

export default CommentsSlider;