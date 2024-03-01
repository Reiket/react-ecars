import React from 'react';
import {CarsInfoPropsType} from "./Cars/components/CarsInfo/types/cars-info.types";
import SellDetails from "./Cars/components/CarsInfo/components/SellDetails/SellDetails";
import InspectionDetails from "./Cars/components/CarsInfo/components/InspectionDetails/InspectionDetails";
import {formatDate} from "../../../../../shared/utils";

const CarsInfo: React.FC<CarsInfoPropsType> = ({detail}) => {

    return (
        <div className="details__info info-details">
            <SellDetails detail={detail}/>
            <InspectionDetails/>
            <div className="info-details__date">Added: {formatDate(detail.added)} • Views: {detail.views}</div>
        </div>
    );
};

export default CarsInfo;