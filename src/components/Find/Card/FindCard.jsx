import React from 'react';
import {BiSolidDownArrow} from "react-icons/bi";
import {BsFilter} from "react-icons/bs";
import {GrFavorite, GrFormClose} from "react-icons/gr";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import FindCardSort from "./FindCardSort";
import FindCardButtons from "./FindCardButtons";
import FindItem from "./FindItem";

const FindCard = () => {
    return (
        <div className="find__card find-card">
            <FindCardSort/>
            <div className="find-card__filter"><button className="find-card__button"><BsFilter/> Filters</button></div>
            <FindCardButtons/>
            <div className="find-card__body">
                <FindItem/>
            </div>
        </div>
    );
};

export default FindCard;