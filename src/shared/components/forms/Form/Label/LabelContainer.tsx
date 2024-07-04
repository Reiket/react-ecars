import React from 'react';
import {LabelContainerProps} from "./types/label.types";
import {capitalizeFirstLetter} from "../../../../utils";
import {MdKeyboardArrowDown} from "react-icons/md";

const LabelContainer: React.FC<LabelContainerProps> = ({label, children, hintType, hasDropdown = false }) => {

    return <div className={"label-container"}>
        <div className={"label-container__info"}>
            {label && <span>{capitalizeFirstLetter(label)}</span>}
            {!!hintType && (
                <button className={"label-container__hint label-container__hint_button"}>Reset</button>
            )}
            {hasDropdown && (
                <button className={"label-container__dropdown"}><MdKeyboardArrowDown/></button>
            )}
        </div>
        {children}
    </div>

};


export default LabelContainer;