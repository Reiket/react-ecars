import React from 'react';
import {Swiper} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {cn} from "../../utils";
import 'src/shared/styles/swiper.scss';
import {TSlider} from "./types/slider.types";


const Slider: React.FC<TSlider> = ({children, classnames, spaceBetween, slidesPerView, breakpoints}) => {
    return <div className={cn(`${classnames}__slider`)}>
        <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            loop
            navigation={{
                prevEl: `.${classnames}__prev`,
                nextEl: `.${classnames}__next`,
            }}
            breakpoints={breakpoints}
        >
            {children}
        </Swiper>
    </div>
};

export default Slider;