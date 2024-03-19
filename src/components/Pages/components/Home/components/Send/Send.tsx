import React from 'react';
import GreenButton from "../../../../../../shared/components/GreenButton/GreenButton";
import Text from "../../../../../../shared/components/Title/Text";
import usePopupControl from "../../../../../../shared/hooks/usePopupControl";
import {useAppSelector} from "../../../../../../app/store/hooks";
import {selectIsOpenGetPopup} from "../../../../../Layout/store/selectors/layout-selector";
import {actions} from "../../../../../Layout/store/actions/layout-actios";
import {Title} from "../../../../../../shared/components/Title/Title";

const Send: React.FC = () => {
    const isOpenPopup = useAppSelector(selectIsOpenGetPopup)
    const {togglePopup} = usePopupControl(isOpenPopup, actions.toggleIsOpenGetPopup);
    return <section className="section__send send">
        <div className="send__container">
            <div className="send__body">
                <div className="send__content">
                    <Title tag={"h3"}  text={"Send an inquiry now and get the best offers suitable for your requirements"} classnames={"send__title block-title"}/>
                    <Text text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}/>
                </div>
                <div className="send__get">
                    <GreenButton onClick={togglePopup} type={"button"} classnames={"send__button green-button_big"} text={"Get a quote"}/>
                </div>
            </div>
        </div>
    </section>
};

export default Send;