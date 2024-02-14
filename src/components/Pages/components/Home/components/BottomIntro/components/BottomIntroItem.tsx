import React from 'react';
import {BottomIntroItemsType} from "../types/bottom-intro.types";
import ItemTitle from "../../../../../../../shared/components/Title/ItemTitle";

const BottomIntroItem: React.FC<BottomIntroItemsType> = ({imageUrl, title, text}) => {
    return (
        <div className="bottom-intro__item">
            <div className="bottom-intro__image">
                <img src={imageUrl} alt="ImageIntro"/>
            </div>
            <div className="bottom-intro__content">
                <ItemTitle classnames={"bottom-intro__title"} text={title} size={"small"}/>
                <div className="bottom-intro__text">{text}</div>
            </div>
        </div>
    );
};

export default BottomIntroItem;