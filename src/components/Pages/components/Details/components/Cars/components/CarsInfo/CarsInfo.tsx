import React from 'react';
import {BiDownload} from "react-icons/bi";
import {BsCheck} from "react-icons/bs";
import inspectionItem from "./components/InspectionDetails/components/InspectionList/json/inspectionItem.json";
import {CarsInfoPropsType} from "./types/cars-info.types";
import SellDetails from "./components/SellDetails/SellDetails";
import InspectionDetails from "./components/InspectionDetails/InspectionDetails";

const CarsInfo: React.FC<CarsInfoPropsType> = ({itemById}) => {

    return (
        <div className="details__info info-details">
            <SellDetails itemById={itemById}/>
            <InspectionDetails/>
            <div className="info-details__date">Added: {itemById.added} • Views: {itemById.views}</div>
        </div>
    );
};

export default CarsInfo;