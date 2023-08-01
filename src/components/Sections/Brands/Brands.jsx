import React from 'react';
import {MdKeyboardArrowDown} from "react-icons/md";
import BrandsCard from "./BrandsCard";

const Brands = () => {
    return (
        <section className="section__brands brands">
            <div className="brands__container">
                <div className="brands__top">
                    <h2 className="brands__title title">Browse by brand</h2>
                </div>
                <div className="brands__body">
                    <BrandsCard/>
                </div>
                <a href={"/"} className="brands__all brands__all_brands all">Show all brands <MdKeyboardArrowDown/></a>
            </div>
        </section>
    );
};

export default Brands;