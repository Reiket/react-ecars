import React from 'react';
import {AiOutlineMail} from "react-icons/ai";
import {BiHelpCircle} from "react-icons/bi";
import {CommItemsType} from "./types/communication.types";

const items = [
    {
        icon: <AiOutlineMail/>,
        title: "Send an inquiry and our managers will offer you the best deals.",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        btnText: "Get a quote"
    },
    {
        icon: <BiHelpCircle/>,
        title: "Send an inquiry and our managers will offer you the best deals.",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        btnText: "Contact Us"
    }
] as Array<CommItemsType>
const Communication: React.FC = () => {
    const attributes = "communication__button green-button green-button_big"
    return (
        <section className="section__communication communication">
            <div className="communication__container">
                <div className="communication__body">
                    {items.map((item, id) => (
                        <div key={id} className="communication__item">
                            <div className="communication__icon">{item.icon}</div>
                            <h3 className="communication__title">{item.title}</h3>
                            <div className="communication__text">{item.text}</div>
                            <a href="/" className={item.btnText !== "Contact Us" ? attributes : attributes + " green-button_white"}>{item.btnText}</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Communication;