import React from 'react';
import {DetailsPopupPropsType} from "./types/details-popup.types";
import Popup from "../../../../../../../../../../../../../../shared/components/Popup/Popup";
import Text from "../../../../../../../../../../../../../../shared/components/Title/Text";
import BlockTitle from "../../../../../../../../../../../../../../shared/components/Title/BlockTitle";
import {useClickOutside} from "../../../../../../../../../../../../../../shared/hooks/useClickOutside";
const DetailsPopup: React.FC<DetailsPopupPropsType> = ({isOpenPopup, setIsOpenPopup}) => {
    const popupRef = React.useRef<HTMLDivElement | null>(null);
    useClickOutside(popupRef, () => {
        if (isOpenPopup) {
            document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden';
        }
        setIsOpenPopup(false)
    })
    return <Popup isOpenPopup={isOpenPopup}>
        <div ref={popupRef} className="details-popup">
            <div className="details-popup__check">
                <img src="/assets/image/other/check.jpg" alt="Check"/>
            </div>
            <BlockTitle text={"Availability successfully checked!"} classnames={"details-popup__title"}/>
            <Text text={"Your car is ready for a road trip!"}/>
        </div>
    </Popup>
};

export default DetailsPopup;