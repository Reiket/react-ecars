import React from 'react';
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