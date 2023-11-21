import React from 'react';
import {DetailsPopupPropsType} from "./types/details-popup.types";
const DetailsPopup: React.FC<DetailsPopupPropsType> = ({isOpenPopup}) => {
    return (
        <div className={isOpenPopup ? "popup active": "popup"}>
            <div className="popup__body">
                <div className="popup__content">
                    <div className="popup__check">
                        <img src="/assets/image/other/check.jpg" alt="Check"/>
                    </div>
                    <h2 className="popup__title">Availability successfully checked!</h2>
                    <div className="popup__text">Your car is ready for a road trip.</div>
                </div>

            </div>
        </div>
    );
};

export default DetailsPopup;