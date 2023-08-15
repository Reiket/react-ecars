import React from 'react';
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

const NewsPost = ({isMoving}) => {
    return (
        <div className="news__post news-post">
            {!isMoving ? (
                <>
                    <h4 className="news-post__title">Featured posts</h4>
                    <div className="news-post__item news-post__item_big">
                        <div className="news-post__image news-post__image_big">
                            <img className={""} src="/assets/image/blog/news-blog/post-big.png" alt="ImagePost"/>
                        </div>
                        <div className="news-post__content">
                            <button className="news-post__category item-blog__category item-blog__category_guide">Guides</button>
                            <div className="news-post__text">What is a VIN (Vehicle Identification Number)?</div>
                        </div>
                    </div>
                    <div className="news-post__item">
                        <div className="news-post__image">
                            <img src="/assets/image/blog/news-blog/03.png" alt="ImagePost"/>
                        </div>
                        <div className="news-post__content">
                            <button className="news-post__category item-blog__category item-blog__category_guide">Guides</button>
                            <div className="news-post__text">What is a VIN (Vehicle Identification Number)?</div>
                        </div>
                    </div>
                    <div className="news-post__item">
                        <div className="news-post__image">
                            <img src="/assets/image/blog/news-blog/03.png" alt="ImagePost"/>
                        </div>
                        <div className="news-post__content">
                            <button className="news-post__category item-blog__category item-blog__category_guide">Guides</button>
                            <div className="news-post__text">What is a VIN (Vehicle Identification Number)?</div>
                        </div>
                    </div>
                    <div className="news-post__item">
                        <div className="news-post__image">
                            <img src="/assets/image/blog/news-blog/03.png" alt="ImagePost"/>
                        </div>
                        <div className="news-post__content">
                            <button className="news-post__category item-blog__category item-blog__category_guide">Guides</button>
                            <div className="news-post__text">What is a VIN (Vehicle Identification Number)?</div>
                        </div>
                    </div>
                    <div className="news-post__item">
                        <div className="news-post__image">
                            <img src="/assets/image/blog/news-blog/03.png" alt="ImagePost"/>
                        </div>
                        <div className="news-post__content">
                            <button className="news-post__category item-blog__category item-blog__category_guide">Guides</button>
                            <div className="news-post__text">What is a VIN (Vehicle Identification Number)?</div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="news-post__slider">
                    <div className="news-post__top">
                        <h4 className="news-post__title">Featured posts</h4>
                        <div className="news-post__navigation navigation">
                            <button className="news-post__button slider-button news-post__prev"><MdOutlineKeyboardArrowLeft/></button>
                            <button className="news-post__button slider-button news-post__next"><MdOutlineKeyboardArrowRight/></button>
                        </div>
                    </div>
                    <Swiper
                        modules={[Navigation,  Autoplay]}
                        spaceBetween={16}
                        slidesPerView={2}
                        autoplay
                        navigation={{
                            prevEl: '.news-post__prev',
                            nextEl: '.news-post__next',
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 16
                            },
                            600: {
                                slidesPerView: 2,
                                spaceBetween: 16
                            },
                        }}
                    >
                        <SwiperSlide className={"news-post__slide"}>
                            <div className="news-post__item news-post__item_big">
                                <div className="news-post__image news-post__image_big">
                                    <img className={""} src="/assets/image/blog/news-blog/post-big.png" alt="ImagePost"/>
                                </div>
                                <div className="news-post__content">
                                    <button className="news-post__category item-blog__category item-blog__category_guide">Guides</button>
                                    <div className="news-post__text">What is a VIN (Vehicle Identification Number)?</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-post__item news-post__item_big">
                                <div className="news-post__image news-post__image_big">
                                    <img className={""} src="/assets/image/blog/news-blog/post-big.png" alt="ImagePost"/>
                                </div>
                                <div className="news-post__content">
                                    <button className="news-post__category item-blog__category item-blog__category_guide">Guides</button>
                                    <div className="news-post__text">What is a VIN (Vehicle Identification Number)?</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-post__item news-post__item_big">
                                <div className="news-post__image news-post__image_big">
                                    <img className={""} src="/assets/image/blog/news-blog/post-big.png" alt="ImagePost"/>
                                </div>
                                <div className="news-post__content">
                                    <button className="news-post__category item-blog__category item-blog__category_guide">Guides</button>
                                    <div className="news-post__text">What is a VIN (Vehicle Identification Number)?</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-post__item news-post__item_big">
                                <div className="news-post__image news-post__image_big">
                                    <img className={""} src="/assets/image/blog/news-blog/post-big.png" alt="ImagePost"/>
                                </div>
                                <div className="news-post__content">
                                    <button className="news-post__category item-blog__category item-blog__category_guide">Guides</button>
                                    <div className="news-post__text">What is a VIN (Vehicle Identification Number)?</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            )}
        </div>
    );
};

export default NewsPost;