import React from 'react';
import BottomIntroItem from "./components/BottomIntroItem";
import {bottomIntroItems} from "./types/bottom-intro.types";
const BottomIntro: React.FC = () => {
    return (
        <div className="intro__bottom bottom-intro">
            <div className="bottom-intro__container">
                <div className="bottom-intro__body">
                    {bottomIntroItems.map((item, id) => <BottomIntroItem key={id} {...item}/>)}
                </div>
            </div>
        </div>
    );
};

export default BottomIntro;