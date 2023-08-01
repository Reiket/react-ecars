import React from 'react';
import WorksItem from "./WorksItem";

const Works = () => {
    return (
        <section className="section__works works">
            <div className="works__container">
                <div className="works__body">
                    <div className="works__top">
                        <h2 className="works__title title">How it works</h2>
                        <div className="works__text works__text_width">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</div>
                    </div>
                    <div className="works__inner">
                        <WorksItem/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;