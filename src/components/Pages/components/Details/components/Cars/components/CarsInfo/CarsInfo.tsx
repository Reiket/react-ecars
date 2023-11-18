import React from 'react';
import {BiDownload} from "react-icons/bi";
import {BsCheck} from "react-icons/bs";
import inspectionItem from "../../../../../../../../json/inspectionItem.json";
import {CarsInfoPropsType} from "./types/cars-info.types";
import SellDetails from "./components/SellDetails/SellDetails";

const CarsInfo: React.FC<CarsInfoPropsType> = ({itemById}) => {

    return (
        <div className="details__info info-details">
            <SellDetails itemById={itemById}/>
            <div className="info-details__inspection inspection-details">
                <div className="inspection-details__top">
                    <h3 className="inspection-details__title">Vehicle inspection</h3>
                    <div className="inspection-details__check"><BsCheck/> Inspected</div>
                </div>
                <ul className="inspection-details__list">
                    {inspectionItem.map((item, index) => (
                        <li key={index} className="inspection-details__item">
                            <h4 className="inspection-details__name">{item.name}</h4>
                            <div className="inspection-details__text">{item.text}</div>
                        </li>
                    ))}
                </ul>
                <a href={'/test.txt'} download className="inspection-details__link"><BiDownload/> Download the basic report</a>
                <h4 className="inspection-details__full">Full Inspection</h4>
                <div className="inspection-details__text">A complete inspection and history check. In addition, we send you lots of photos and videos of the car to help you make that important purchase.</div>
                <a href="https://carexamer.com/how-it-works/simple-booking" className="inspection-details__button green-button green-button_big">Book a full inspection</a>
                <a href="https://carexamer.com/how-it-works/simple-booking" className="inspection-details__more all">Learn more about the full inspection</a>
            </div>
            <div className="info-details__date">Added: {itemById.added} • Views: {itemById.views}</div>
        </div>
    );
};

export default CarsInfo;