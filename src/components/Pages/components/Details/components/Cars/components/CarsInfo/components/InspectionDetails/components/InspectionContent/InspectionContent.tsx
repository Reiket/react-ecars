import React from 'react';
import {BiDownload} from "react-icons/bi";

const InspectionContent: React.FC = () => {
    return <>
        <a href={'/test.txt'} download className="inspection-details__link"><BiDownload/> Download the basic report</a>
        <h4 className="inspection-details__full">Full Inspection</h4>
        <div className="inspection-details__text">A complete inspection and history check. In addition, we send you lots of photos and videos of the car to help you make that important purchase.</div>
        <a href="https://carexamer.com/how-it-works/simple-booking" className="inspection-details__button green-button green-button_big">Book a full inspection</a>
        <a href="https://carexamer.com/how-it-works/simple-booking" className="inspection-details__more all">Learn more about the full inspection</a>
    </>
}

export default InspectionContent;