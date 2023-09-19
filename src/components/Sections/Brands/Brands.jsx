import React from 'react';
import {MdKeyboardArrowDown} from "react-icons/md";
import BrandsCard from "./BrandsCard";
import BrandsLoader from "../../Loader/BrandsLoader";
const Brands = ({brands}) => {
    const [isShowAll, setIsShowAll] = React.useState(false);
    const itemsToShow = isShowAll ? brands.length : 6;

    const onClickToShowAll = () => {
        setIsShowAll(prev => !prev);
    };

    return (
        <section className="section__brands brands">
            <div className="brands__container">
                <div className="brands__top">
                    <h2 className="brands__title title">Browse by brand</h2>
                </div>
                <div className={brands.length === 0 ? "brands__body loader": "brands__body"}>
                    {brands.length === 0 ? <BrandsLoader/> : brands.slice(0, itemsToShow).map((item) => <BrandsCard key={item.id} name={item.name} imageUrl={item.imageUrl}/>)}
                </div>
                <button  onClick={onClickToShowAll} className={isShowAll ? "brands__all brands__all_brands all less" : "brands__all brands__all_brands all"}>{isShowAll ? "Less" : "Show"} all brands <MdKeyboardArrowDown/></button>
            </div>
        </section>
    );
};

export default Brands;

