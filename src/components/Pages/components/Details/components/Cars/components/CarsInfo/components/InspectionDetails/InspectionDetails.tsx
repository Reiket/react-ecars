import React from 'react';
import {BsCheck} from "react-icons/bs";
import inspectionItem from "./components/InspectionList/json/inspectionItem.json";
import {BiDownload} from "react-icons/bi";
import InspectionContent from "./components/InspectionContent/InspectionContent";
import InspectionList from "./components/InspectionList/InspectionList";
import InspectionTop from "./components/InspectionTop/InspectionTop";

const InspectionDetails: React.FC = () => {
    return  <div className="info-details__inspection inspection-details">
        <InspectionTop/>
        <InspectionList/>
        <InspectionContent/>
    </div>
}

export default InspectionDetails;