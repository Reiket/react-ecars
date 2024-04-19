import React from "react";

export type TSlider = {
    children: React.ReactNode
    classnames: string
    spaceBetween: number
    slidesPerView: number
    breakpoints: {
        [key: number]: {
            slidesPerView: number;
            spaceBetween: number;
        }
    }
}