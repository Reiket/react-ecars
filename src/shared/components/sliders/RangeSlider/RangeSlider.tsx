import React, {FC} from 'react';
import Slider from "rc-slider";
import './styles/range.scss';
import {RangeSliderProps} from "./types/range-slider.types";



const RangeSlider: FC<RangeSliderProps> = ({max, onChange, value}) => {
    return (
        <Slider range onChange={onChange} value={value} max={max}/>
    );
};

export default RangeSlider;