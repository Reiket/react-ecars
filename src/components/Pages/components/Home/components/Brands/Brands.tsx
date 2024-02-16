import React from 'react';
import {MdKeyboardArrowDown} from "react-icons/md";
import BrandsCard from "./components/BrandsCard";
import {useDispatch, useSelector} from "react-redux";
import {selectBrands} from "./store/selector/brands-selector";
import Title from "../../../../../../shared/components/Title/Title";
import {fetchBrands} from "./store/thunks/fetchBrand";
import {AppDispatch} from "../../../../../../app/store/types/store.types";
import Loader from "../../../../../../shared/components/Loader/Loader";
import {cn} from "../../../../../../shared/utils";

const Brands: React.FC = () => {
    const [isShowAll, setIsShowAll] = React.useState(false);
    const brands = useSelector(selectBrands)
    const itemsToShow = isShowAll ? brands.length : 6;
    const dispatch: AppDispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchBrands())
    }, [])

    const onClickToShowAll = () => {
        setIsShowAll(prev => !prev);
    };

    return (
        <section className="section__brands brands">
            <div className="brands__container">
                <div className="brands__top">
                    <Title text={"Browse by brand"}/>
                </div>
                <div className={brands.length === 0 ? "brands__body loader": "brands__body"}>
                    {brands.length === 0 ? <Loader classnames={"brands__loader"}/> : [...brands].slice(0, itemsToShow).map((item) => <BrandsCard key={item.id} {...item}/>)}
                </div>
                <button onClick={onClickToShowAll} className={cn("brands__all all all_show", {
                  "all_show_less": isShowAll
                })}>{isShowAll ? "Less" : "Show"} all brands <MdKeyboardArrowDown/></button>
            </div>
        </section>
    );
};

export default Brands;

