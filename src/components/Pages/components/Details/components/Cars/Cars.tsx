import React from 'react';
import ImageGallery from "react-image-gallery";
import CarsInfo from "../CarsInfo";
import CarsList from "./components/CarsList/CarsList";
import CarsDescription from "./components/CarsDescription/CarsDescription";
import FeaturesCars from "./components/FeaturesCars/FeaturesCars";
import QuestionsCars from "./components/QuestionsCars/QuestionsCars";
import LinksCars from "./components/LinksCars/LinksCars";
import {useWindowWidth} from "../../../../../../shared/hooks/useWindowWidth";
import {CarsPropsType} from "./types/cars.types";
import {selectDetail} from "../../store/selector/details-selector";
import {useAppSelector} from "../../../../../../app/store/hooks";

const Cars: React.FC<CarsPropsType> = ({currency}) => {
    const detail = useAppSelector(selectDetail)
    const isMoving = useWindowWidth(991)
    const images = Array.from({ length: 6 }, (_) => ({
        original: detail.imageUrl,
        thumbnail: detail.imageUrl,
    }));
    return <>
        <div className="details__cars cars">
            <ImageGallery items={images} showIndex={true}/>
            {isMoving && <CarsInfo detail={detail} currency={currency}/>}
            <CarsList detail={detail}/>
            <CarsDescription detail={detail}/>
            <FeaturesCars/>
            <QuestionsCars/>
            <LinksCars/>
        </div>
        { !isMoving && <CarsInfo detail={detail} currency={currency}/>}
    </>
}

export default Cars;