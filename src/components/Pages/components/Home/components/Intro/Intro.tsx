import React from 'react';
import GreenButton from "../../../../../../shared/components/buttons/GreenButton/GreenButton";
import {contacts} from "../../../../../../shared/Contacts/contacts-aray";
import usePopupControl from "../../../../../../shared/hooks/usePopupControl";
import {useAppSelector} from "../../../../../../app/store/hooks";
import {selectIsOpenGetPopup} from "../../../../../Layout/store/selectors/layout-selector";
import {actions} from "../../../../../Layout/store/actions/layout-actios";
import {Title} from "../../../../../../shared/components/Title/Title";

const Intro: React.FC = () => {
    const isOpenPopup = useAppSelector(selectIsOpenGetPopup)
    const {togglePopup} = usePopupControl(isOpenPopup, actions.toggleIsOpenGetPopup);
    return <>
        <section className="section__intro intro">
            <div className="intro__container">
                <div className="intro__body">
                    <Title tag={"h1"} classnames={"intro__title"} text={"Car import services with delivery to your doorstep."}/>
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