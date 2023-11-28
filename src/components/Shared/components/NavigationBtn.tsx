import React from 'react';
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";

const NavigationBtn: React.FC<{classnames: string}> = ({classnames}) => {
    return <div className={`${classnames}__navigation navigation`}>
        <button className={`slider-button ${classnames}__prev`}><MdOutlineKeyboardArrowLeft/></button>
        <button className={`slider-button ${classnames}__next`}><MdOutlineKeyboardArrowRight/></button>
    </div>
}

export default NavigationBtn;