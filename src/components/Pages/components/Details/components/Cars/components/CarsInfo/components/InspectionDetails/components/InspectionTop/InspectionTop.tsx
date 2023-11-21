import React from 'react';
import {BsCheck} from "react-icons/bs";

const InspectionTop: React.FC = () => {
    return <div className="inspection-details__top">
        <h3 className="inspection-details__title">Vehicle inspection</h3>
        <div className="inspection-details__check"><BsCheck/> Inspected</div>
    </div>
}

export default InspectionTop;