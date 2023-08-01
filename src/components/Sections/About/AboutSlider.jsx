import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {AiFillStar} from "react-icons/ai";

const AboutSlider = () => {
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
            <SwiperSlide className="about__slider about-slider">
                <div className="about-slider__item">
                    <div className="about-slider__top">
                        <div className="about-slider__avatar">
                            <img src="/assets/image/about/01.png" alt="Avatar"/>
                        </div>
                        <div className="about-slider__info">
                            <div className="about-slider__fullname">Robert Fox</div>
                            <div className="about-slider__brand">BMW M850</div>
                        </div>
                        <div className="about-slider__rating">{[...Array(5)].map((_, id) => <AiFillStar key={id}/>)}</div>
                    </div>
                    <p className="about-slider__text">
                        “Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies lacus. Nisi porta lorem mollis aliquam ut porttitor leo. Venenatis cras sed felis eget. Duis ultricies lacus sed turpis tincidunt. Interdum varius sit amet mattis. Libero justo laoreet sit amet cursus sit amet dictum sit. Consequat interdum varius sit amet mattis vulputate enim nulla.”
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="about__slider about-slider">
                <div className="about-slider__item">
                    <div className="about-slider__top">
                        <div className="about-slider__avatar">
                            <img src="/assets/image/about/02.png" alt="Avatar"/>
                        </div>
                        <div className="about-slider__info">
                            <div className="about-slider__fullname">Cody Fisher</div>
                            <div className="about-slider__brand">Mercedes-Benz C 63 AMG</div>
                        </div>
                        <div className="about-slider__rating">{[...Array(5)].map((_, id) => <AiFillStar key={id}/>)}</div>
                    </div>
                    <p className="about-slider__text">
                        “Id ornare arcu odio ut sem nulla. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Velit dignissim sodales ut eu sem integer vitae justo. A erat nam at lectus urna duis convallis convallis. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Risus ultricies tristique nulla aliquet enim tortor. Consectetur a erat nam at.”
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="about__slider about-slider">
                <div className="about-slider__item">
                    <div className="about-slider__top">
                        <div className="about-slider__avatar">
                            <img src="/assets/image/about/03.png" alt="Avatar"/>
                        </div>
                        <div className="about-slider__info">
                            <div className="about-slider__fullname">Wade Warren</div>
                            <div className="about-slider__brand">Lexus LS 460</div>
                        </div>
                        <div className="about-slider__rating">{[...Array(5)].map((_, id) => <AiFillStar key={id}/>)}</div>
                    </div>
                    <p className="about-slider__text">
                        “Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar neque laoreet suspendisse interdum consectetur. Accumsan lacus vel facilisis volutpat est velit egestas dui id.“
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="about__slider about-slider">
                <div className="about-slider__item">
                    <div className="about-slider__top">
                        <div className="about-slider__avatar">
                            <img src="/assets/image/about/01.png" alt="Avatar"/>
                        </div>
                        <div className="about-slider__info">
                            <div className="about-slider__fullname">Robert Fox</div>
                            <div className="about-slider__brand">BMW M850</div>
                        </div>
                        <div className="about-slider__rating">{[...Array(5)].map((_, id) => <AiFillStar key={id}/>)}</div>
                    </div>
                    <p className="about-slider__text">
                        “Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies lacus. Nisi porta lorem mollis aliquam ut porttitor leo. Venenatis cras sed felis eget. Duis ultricies lacus sed turpis tincidunt. Interdum varius sit amet mattis. Libero justo laoreet sit amet cursus sit amet dictum sit. Consequat interdum varius sit amet mattis vulputate enim nulla.”
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="about__slider about-slider">
                <div className="about-slider__item">
                    <div className="about-slider__top">
                        <div className="about-slider__avatar">
                            <img src="/assets/image/about/01.png" alt="Avatar"/>
                        </div>
                        <div className="about-slider__info">
                            <div className="about-slider__fullname">Robert Fox</div>
                            <div className="about-slider__brand">BMW M850</div>
                        </div>
                        <div className="about-slider__rating">{[...Array(5)].map((_, id) => <AiFillStar key={id}/>)}</div>
                    </div>
                    <p className="about-slider__text">
                        “Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies lacus. Nisi porta lorem mollis aliquam ut porttitor leo. Venenatis cras sed felis eget. Duis ultricies lacus sed turpis tincidunt. Interdum varius sit amet mattis. Libero justo laoreet sit amet cursus sit amet dictum sit. Consequat interdum varius sit amet mattis vulputate enim nulla.”
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default AboutSlider;