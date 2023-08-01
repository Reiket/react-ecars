import React from 'react';

const BottomIntroItem = () => {
    return (
        <>
            <div className="bottom-intro__item">
                <div className="bottom-intro__image">
                    <img src="/assets/image/icons/bottom-intro/01.svg" alt="ImageIntro"/>
                </div>
                <div className="bottom-intro__content">
                    <h4 className="bottom-intro__title">Professional approach to clients</h4>
                    <div className="bottom-intro__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</div>
                </div>
            </div>
            <div className="bottom-intro__item">
                <div className="bottom-intro__image">
                    <img src="/assets/image/icons/bottom-intro/02.svg" alt="ImageIntro"/>
                </div>
                <div className="bottom-intro__content">
                    <h4 className="bottom-intro__title">Protect all payments</h4>
                    <div className="bottom-intro__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</div>
                </div>
            </div>
            <div className="bottom-intro__item">
                <div className="bottom-intro__image">
                    <img src="/assets/image/icons/bottom-intro/03.svg" alt="ImageIntro"/>
                </div>
                <div className="bottom-intro__content">
                    <h4 className="bottom-intro__title">Real reviews from clients</h4>
                    <div className="bottom-intro__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</div>
                </div>
            </div>
        </>
    );
};

export default BottomIntroItem;