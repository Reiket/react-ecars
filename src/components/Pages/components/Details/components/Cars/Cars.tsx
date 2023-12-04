import React from 'react';
import ImageGallery from "react-image-gallery";
import CarsInfo from "./components/CarsInfo/CarsInfo";
import CarsList from "./components/CarsList/CarsList";
import CarsDescription from "./components/CarsDescription/CarsDescription";
import FeaturesCars from "./components/FeaturesCars/FeaturesCars";
import QuestionsCars from "./components/QuestionsCars/QuestionsCars";
import LinksCars from "./components/LinksCars/LinksCars";
import {useWindowWidth} from "../../../../../../shared/hooks/useWindowWidth";
import {useSelector} from "react-redux";
import {selectItemById} from "../../../Home/components/Offers/store/selector/offers-selector";
import {CarsPropsType} from "./types/cars.types";
const Cars: React.FC<CarsPropsType> = ({currency}) => {
    const itemById = useSelector(selectItemById)
    const isMoving = useWindowWidth(991)
    const images = Array.from({ length: 6 }, (_) => ({
        original: itemById.imageUrl,
        thumbnail: itemById.imageUrl,
    }));
    return <>
        <div className="details__cars cars">
            <ImageGallery items={images} showIndex={true}/>
            {isMoving && <CarsInfo itemById={itemById} currency={currency}/>}
            <CarsList itemById={itemById}/>
            <CarsDescription itemById={itemById}/>
            <FeaturesCars/>
            <QuestionsCars/>
            <LinksCars/>
        </div>
        { !isMoving && <CarsInfo itemById={itemById} currency={currency}/>}
    </>
}

export default Cars;