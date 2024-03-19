import React from 'react';
import {BottomIntroItemsType} from "../types/bottom-intro.types";
import {Title} from "../../../../../../../shared/components/Title/Title";

const BottomIntroItem: React.FC<BottomIntroItemsType> = ({imageUrl, title, text}) => {
    return (
        <div className="bottom-intro__item">
            <div className="bottom-intro__image benefits-image">
                <img src={imageUrl} alt="ImageIntro"/>
            </div>
            <div className="bottom-intro__content">
                <Title tag={"h3"} text={title} classnames={"item-title_small"}/>
                <div className="bottom-intro__text">{text}</div>
            </div>
        </div>
    );
};

export default BottomIntroItem;