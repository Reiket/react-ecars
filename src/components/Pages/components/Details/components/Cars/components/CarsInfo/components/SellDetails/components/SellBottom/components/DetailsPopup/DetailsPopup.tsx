import React from 'react';
import {DetailsPopupPropsType} from "./types/details-popup.types";
import Popup from "../../../../../../../../../../../../../../shared/components/Popup/Popup";
import {useClickOutside} from "../../../../../../../../../../../../../../shared/hooks/useClickOutside";
import {bodyOverflow} from "../../../../../../../../../../../../../../shared/utils";
import RenderContent from "./components/Content/RenderContent";

const DetailsPopup: React.FC<DetailsPopupPropsType> = ({isOpenPopup, setIsOpenPopup}) => {
    const popupRef = React.useRef<HTMLDivElement | null>(null);
    React.useEffect(() => {
        bodyOverflow(isOpenPopup)
    }, [isOpenPopup])
    useClickOutside(popupRef, setIsOpenPopup)
    return <Popup isOpenPopup={isOpenPopup}>
        <div ref={popupRef} className="details-popup">
            <RenderContent/>
        </div>
    </Popup>
};



export default DetailsPopup;