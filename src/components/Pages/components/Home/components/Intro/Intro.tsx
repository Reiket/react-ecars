import React from 'react';
import GreenButton from "../../../../../../shared/components/GreenButton/GreenButton";
import {contacts} from "../../../../../../shared/Contacts/contacts-aray";
import usePopupControl from "../../../../../../shared/hooks/usePopupControl";

const Intro: React.FC = () => {
    const {togglePopup} = usePopupControl();
    return <>
        <section className="section__intro intro">
            <div className="intro__container">
                <div className="intro__body">
                    <h1 className="intro__title">Car import services with delivery to your doorstep.</h1>
                    <div className="intro__contacts">
                        <GreenButton onClick={togglePopup} type={"button"}
                                     classnames={"intro__button green-button_big"} text={"Get a quote"}/>
                        <ul className="intro__info">
                            {[...contacts].slice(4, 6).map((item, index) => (
                                <li key={index} className="intro__item">
                                    <a href={item.url}>{item.icon}{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
};

export default Intro;