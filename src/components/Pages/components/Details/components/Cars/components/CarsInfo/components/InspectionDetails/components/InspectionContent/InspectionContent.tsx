import React from 'react';
import {BiDownload} from "react-icons/bi";
import GreenButton from "../../../../../../../../../../../../shared/components/GreenButton/GreenButton";
import ItemTitle from "../../../../../../../../../../../../shared/components/Title/ItemTitle";

const InspectionContent: React.FC = () => {
    return <>
        <a href={'/test.txt'} download className="inspection-details__link"><BiDownload/> Download the basic report</a>
        <ItemTitle classnames={"inspection-details__full"} text={"Full Inspection"} size={"small"}/>
        <div className="inspection-details__text">A complete inspection and history check. In addition, we send you lots of photos and videos of the car to help you make that important purchase.</div>
        <GreenButton href={"https://carexamer.com/how-it-works/simple-booking"} classnames={"inspection-details__button green-button_big"} text={"Book a full inspection"} type={"link"}/>
        <a href="https://carexamer.com/how-it-works/simple-booking" className="inspection-details__more all">Learn more about the full inspection</a>
    </>
}

export default InspectionContent;