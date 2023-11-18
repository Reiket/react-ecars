import React from 'react';
import GreenButton from "../../../../../Shared/components/GreenButton";

const Send: React.FC = () => {
    return (
        <section className="section__send send">
            <div className="send__container">
                <div className="send__body">
                    <div className="send__content">
                        <h3 className="send__title">Send an inquiry now and get the best offers suitable for your requirements</h3>
                        <div className="send__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                    </div>
                    <div className="send__get">
                        <GreenButton classnames={"send__button green-button green-button_big"} text={"Get a quote"}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Send;