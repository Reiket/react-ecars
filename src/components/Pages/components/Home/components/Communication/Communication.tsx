import React from 'react';
import {AiOutlineMail} from "react-icons/ai";
import {BiHelpCircle} from "react-icons/bi";
import {CommItemsType} from "./types/communication.types";
import BlockTitle from "../../../../../../shared/components/Title/BlockTitle";
import Text from "../../../../../../shared/components/Title/Text";
import GreenButton from "../../../../../../shared/components/GreenButton/GreenButton";
import {cn} from "../../../../../../shared/utils";
import usePopupControl from "../../../../../../shared/hooks/usePopupControl";

const items = [
    {
        icon: <AiOutlineMail/>,
        title: "Send an inquiry and our managers will offer you the best deals.",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        btnText: "Get a quote"
    },
    {
        icon: <BiHelpCircle/>,
        title: "Do you still have questions? Contact us for answers.",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        btnText: "Contact Us"
    }
] as Array<CommItemsType>
const Communication: React.FC = () => {
    const {togglePopup} = usePopupControl();

    return <section className="section__communication communication">
        <div className="communication__container">
            <div className="communication__body">
                {items.map((item, id) => {
                    const isContactText = item.btnText === "Contact Us"
                    return <div key={id} className="communication__item">
                        <div className="communication__icon">{item.icon}</div>
                        <BlockTitle classnames={"communication__title"} text={item.title}/>
                        <Text text={item.text} classnames={"communication__text"}/>
                        <GreenButton onClick={togglePopup}
                            classnames={cn("communication__button green-button_big", {
                                "green-button_white": isContactText
                            })}
                            text={item.btnText} href={"/contacts"} type={isContactText ? "link": "button"}/>
                    </div>
                })}
            </div>
        </div>
    </section>
};

export default Communication;