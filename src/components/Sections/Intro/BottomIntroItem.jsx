import React from 'react';

const BottomIntroItem = ({imageUrl, title, text}) => {
    return (
        <div className="bottom-intro__item">
            <div className="bottom-intro__image">
                <img src={imageUrl} alt="ImageIntro"/>
            </div>
            <div className="bottom-intro__content">
                <h4 className="bottom-intro__title">{title}</h4>
                <div className="bottom-intro__text">{text}</div>
            </div>
        </div>
    );
};

export default BottomIntroItem;