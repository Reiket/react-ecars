import React from 'react';
import {RiMailFill, RiWhatsappFill} from "react-icons/ri";

const Intro = () => {
    return (
        <section className="section__intro intro">
            <div className="intro__container">
                <div className="intro__body">
                    <h2 className="intro__title">Car import services with delivery to your doorstep.</h2>
                    <div className="intro__contacts">
                        <a href="/" className="intro__button green-button green-button_big">Get a quote</a>
                        <div className="intro__info">
                            <div className="intro__item"><a href="tel:+971 55 811 9024"><RiWhatsappFill/> +971 55 811 9024</a></div>
                            <div className="intro__item"><a href={"request@example.com"}><RiMailFill/> request@example.com</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;