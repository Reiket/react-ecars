import React from 'react';
import {AiOutlineMail} from "react-icons/ai";
import {BiHelpCircle} from "react-icons/bi";

const Communication = () => {
    return (
        <section className="section__communication communication">
            <div className="communication__container">
                <div className="communication__body">
                    <div className="communication__item">
                        <div className="communication__icon"><AiOutlineMail/></div>
                        <h3 className="communication__title">Send an inquiry and our managers will offer you the best deals.</h3>
                        <div className="communication__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</div>
                        <a href="/" className="communication__button green-button green-button_big">Get a quote</a>
                    </div>
                    <div className="communication__item">
                        <div className="communication__icon"><BiHelpCircle/></div>
                        <h3 className="communication__title">Do you still have questions? Contact us for answers.</h3>
                        <div className="communication__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</div>
                        <a href="/" className="communication__button green-button green-button_big green-button_white">Contact Us</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Communication;