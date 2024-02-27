import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import CommentLoader from "../CommentsLoader/CommentLoader";
import '../../../Offers/components/styles/swiper.scss';
import {selectComments} from "../../store/selector/comments-selector";
import Text from "../../../../../../../../shared/components/Title/Text";
import {useAppSelector} from "../../../../../../../../app/store/hooks";

const CommentsSlider = () => {
    const previewSlidesCount = 3
    const ratingStarCount = 5;
    const items = useAppSelector(selectComments)
    return (
        <Swiper
            modules={[Navigation,  Autoplay]}
            spaceBetween={24}
            autoplay
            loop={true}
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
            {items.length === 0 ? [...Array(previewSlidesCount)].map((_, id) => <SwiperSlide key={id}>
                <CommentLoader />
            </SwiperSlide>) :  items.map((item) => <SwiperSlide key={item.id} className="comments__slider comments-slider">
                <div className="comments-slider__item">
                    <div className="comments-slider__top">
                        <div className="comments-slider__avatar">
                            <img src={item.avatar} alt="Avatar"/>
                        </div>
                        <div className="comments-slider__info">
                            <p className="comments-slider__fullname">{item.fullName}</p>
                            <p className="comments-slider__brand">{item.model}</p>
                        </div>
                        <div className="comments-slider__rating">
                            {[...Array(ratingStarCount)].map((_, id) => (
                                id < item.rating ? <AiFillStar key={id} /> : <AiOutlineStar key={id} />
                            ))}
                        </div>
                    </div>
                    <Text text={item.comment} classnames={"comments-slider__text"}/>
                </div>
            </SwiperSlide>)}

        </Swiper>
    );
};

export default CommentsSlider;