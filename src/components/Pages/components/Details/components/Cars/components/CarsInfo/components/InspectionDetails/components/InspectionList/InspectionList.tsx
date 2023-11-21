import React from 'react';
import {inspectionItem} from "./types/inspection-list.types";


const InspectionList = () =>{
    return <ul className="inspection-details__list">
        {inspectionItem.map((item, index) => (
            <li key={index} className="inspection-details__item">
                <h4 className="inspection-details__name">{item.name}</h4>
                <div className="inspection-details__text">{item.text}</div>
            </li>
        ))}
    </ul>
}
export default InspectionList;