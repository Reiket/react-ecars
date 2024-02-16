import React from 'react';
import {BsCheck} from "react-icons/bs";
import BlockTitle from "../../../../../../../../../../../../shared/components/Title/BlockTitle";

const InspectionTop: React.FC = () => {
    return <div className="inspection-details__top">
        <BlockTitle text={"Vehicle inspection"}/>
        <button className="inspection-details__check"><BsCheck/> Inspected</button>
    </div>
}

export default InspectionTop;