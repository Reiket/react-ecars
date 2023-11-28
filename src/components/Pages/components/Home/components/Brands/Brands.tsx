import React from 'react';
import {MdKeyboardArrowDown} from "react-icons/md";
import BrandsCard from "./components/BrandsCard";
import BrandsLoader from "../../../../../Other/Loader/BrandsLoader";
import {AppDispatch} from "../../../../../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {fetchBrands} from "../../../../../../redux/reducers/cars-reducer";
import {selectBrands} from "../../../../../../redux/selectors/brands-selector";
import Title from "../../../../../Shared/components/Title";
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
                    {brands.length === 0 ? <BrandsLoader/> : [...brands].slice(0, itemsToShow).map((item) => <BrandsCard key={item.id} name={item.name} imageUrl={item.imageUrl}/>)}
                </div>
                <button onClick={onClickToShowAll} className={isShowAll ? "brands__all brands__all_brands all less" : "brands__all brands__all_brands all"}>{isShowAll ? "Less" : "Show"} all brands <MdKeyboardArrowDown/></button>
            </div>
        </section>
    );
};

export default Brands;

