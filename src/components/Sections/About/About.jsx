import React from 'react';
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import AboutSlider from "./AboutSlider";

const About = () => {
    return (
        <section className="section__about about">
            <div className="about__container">
                <div className="about__body">
                    <div className="about__top">
                        <h2 className="about__title title">Our happy clients say about us</h2>
                        <div className="about__navigation">
                            <button className="about__button slider-button about__prev"><MdOutlineKeyboardArrowLeft/></button>
                            <button className="about__button slider-button about__next"><MdOutlineKeyboardArrowRight/></button>
                        </div>
                    </div>
                    <div className="about__inner">
                       <AboutSlider/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;