import React from 'react';
import BottomIntroItem from "./BottomIntroItem";

const BottomIntro = () => {
    return (
        <div className="intro__bottom bottom-intro">
            <div className="bottom-intro__container">
                <div className="bottom-intro__body">
                    <BottomIntroItem/>
                </div>
            </div>
        </div>
    );
};

export default BottomIntro;