import React from 'react';
import {TPopupProps} from "./types/popup.types";
import {cn} from "../../utils";

const Popup: React.FC<TPopupProps> = ({children, isOpenPopup, classnames}) => {

    return <div className={isOpenPopup ? "popup active": "popup"}>
        <div className="popup__body">
            <div className={cn("popup__content", classnames)}>
                {children}
            </div>
        </div>
    </div>
};

export default Popup;