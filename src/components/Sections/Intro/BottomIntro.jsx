import React from 'react';
import BottomIntroItem from "./BottomIntroItem";
import items from "../../../json/introItem.json";

const BottomIntro = () => {
    return (
        <div className="intro__bottom bottom-intro">
            <div className="bottom-intro__container">
                <div className="bottom-intro__body">
                    {items.map((item, id) => <BottomIntroItem key={id} title={item.title} text={item.text} imageUrl={item.imageUrl}/>)}
                </div>
            </div>
        </div>
    );
};

export default BottomIntro;