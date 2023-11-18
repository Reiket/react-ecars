import React from 'react';
import {RiMailFill, RiWhatsappFill} from "react-icons/ri";
import GreenButton from "../../../../../Shared/components/GreenButton";
import {contacts} from "../../../../../../shared/Contacts/contacts-aray";

const Intro: React.FC = () => {
    return (
        <section className="section__intro intro">
            <div className="intro__container">
                <div className="intro__body">
                    <h2 className="intro__title">Car import services with delivery to your doorstep.</h2>
                    <div className="intro__contacts">
                        <GreenButton classnames={"intro__button green-button green-button_big"} text={"et a quote"}/>
                        <ul className="intro__info">
                            {[...contacts].slice(4, 6).map((item, index) => (
                                <li key={index} className="intro__item"><a href={item.url}>{item.icon}{item.text}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;