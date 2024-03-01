import React from 'react';
import InspectionContent from "../../../../../InspectionContent/InspectionContent";
import InspectionList from "../../../../../InspectionList/InspectionList";
import InspectionTop from "../../../../../InspectionTop/InspectionTop";

const InspectionDetails: React.FC = () => {
    return  <div className="info-details__inspection inspection-details">
        <InspectionTop/>
        <InspectionList/>
        <InspectionContent/>
    </div>
}

export default InspectionDetails;