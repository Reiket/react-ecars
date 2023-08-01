import React from 'react';
import {BiSolidDownArrow} from "react-icons/bi";

const FindCardSort = () => {
    return (
        <div className="find-card__top">
            <div className="find-card__amout"><span>2743</span>found</div>
            <div className="find-card__sort find-sort">
                <span className={"find-sort__text"}>Sort by:</span>
                <div className={"header-menu"}>
                    <div className="find-sort__category">Newly added<BiSolidDownArrow className={"header-menu__arrow"}/></div>
                    <ul className={"header-menu__list"}>
                        <li className="info-header-top__point header-menu__point find-sort__point">Price</li>
                        <li className="info-header-top__point header-menu__point find-sort__point">Featured</li>
                        <li className="info-header-top__point header-menu__point find-sort__point">Alphabet</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FindCardSort;