import React from 'react';
import {BsCheck} from "react-icons/bs";
import {Title} from "../../../../../../shared/components/Title/Title";

const InspectionTop: React.FC = () => {
    return <div className="inspection-details__top">
        <Title tag={"h3"} classnames={"block-title"} text={"Vehicle inspection"}/>
        <button className="inspection-details__check"><BsCheck/> Inspected</button>
    </div>
}

export default InspectionTop;