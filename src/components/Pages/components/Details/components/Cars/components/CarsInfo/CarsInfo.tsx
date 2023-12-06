import React from 'react';
import {CarsInfoPropsType} from "./types/cars-info.types";
import SellDetails from "./components/SellDetails/SellDetails";
import InspectionDetails from "./components/InspectionDetails/InspectionDetails";

const CarsInfo: React.FC<CarsInfoPropsType> = ({detail}) => {

    return (
        <div className="details__info info-details">
            <SellDetails detail={detail}/>
            <InspectionDetails/>
            <div className="info-details__date">Added: {detail.added} • Views: {detail.views}</div>
        </div>
    );
};

export default CarsInfo;