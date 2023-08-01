import React from 'react';
import {GrFavorite} from "react-icons/gr";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";

const FindItem = () => {
    return (
        <>
            <div className="find-card__item find-item">
                <div className="find-item__image">
                    <button className="find-item__premium">Premium</button>
                    <img src="/assets/image/find-card/01.png" alt="Findcard"/>
                </div>
                <div className="find-item__content">
                    <h3 className="find-item__name">Toyota Land Cruiser 300 VXR+ V6 3.3L Diesel Twin Turbo AT <button className="find-item__icon"><GrFavorite/></button></h3>
                    <div className="find-item__description">Milwaukee • NEW • 0 km • Gasoline</div>
                    <div className="find-item__text">2022 Land Cruiser, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.</div>
                    <div className="find-item__info">
                        <div className="find-item__price">$45,995</div>
                        <a href="/" className="find-item__link all">Details <MdOutlineKeyboardArrowRight/></a>
                    </div>
                </div>
            </div>
            <div className="find-card__item find-item">
                <div className="find-item__image">
                    <img src="/assets/image/find-card/01.png" alt="Findcard"/>
                </div>
                <div className="find-item__content">
                    <h3 className="find-item__name">Toyota Land Cruiser 300 VXR+ V6 3.3L Diesel Twin Turbo AT <div className="find-item__icon"><GrFavorite/></div></h3>
                    <div className="find-item__description">Milwaukee • NEW • 0 km • Gasoline</div>
                    <div className="find-item__text">2022 Land Cruiser, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.</div>
                    <div className="find-item__info">
                        <div className="find-item__price">$45,995</div>
                        <a href="/" className="find-item__link all">Details <MdOutlineKeyboardArrowRight/></a>
                    </div>
                </div>
            </div>
            <div className="find-card__item find-item">
                <div className="find-item__image">
                    <img src="/assets/image/find-card/01.png" alt="Findcard"/>
                </div>
                <div className="find-item__content">
                    <h3 className="find-item__name">Toyota Land Cruiser 300 VXR+ V6 3.3L Diesel Twin Turbo AT <div className="find-item__icon"><GrFavorite/></div></h3>
                    <div className="find-item__description">Milwaukee • NEW • 0 km • Gasoline</div>
                    <div className="find-item__text">2022 Land Cruiser, panoramic roof, black interior, LED headlights and automatic gearbox. A brand new car with GCC specifications.</div>
                    <div className="find-item__info">
                        <div className="find-item__price">$45,995</div>
                        <a href="/" className="find-item__link all">Details <MdOutlineKeyboardArrowRight/></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FindItem;