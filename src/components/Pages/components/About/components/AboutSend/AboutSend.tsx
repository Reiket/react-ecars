import React from 'react';
import {GoMail} from "react-icons/go";
import Text from "../../../../../../shared/components/Title/Text";
import GreenButton from "../../../../../../shared/components/buttons/GreenButton/GreenButton";
import {sendText} from "../../utils/about-text";
import usePopupControl from "../../../../../../shared/hooks/usePopupControl";
import {useAppSelector} from "../../../../../../app/store/hooks";
import {selectIsOpenGetPopup} from "../../../../../Layout/store/selectors/layout-selector";
import {actions} from "../../../../../Layout/store/actions/layout-actios";
import {Title} from "../../../../../../shared/components/Title/Title";

const AboutSend = () => {
    const isOpenPopup = useAppSelector(selectIsOpenGetPopup)
    const {togglePopup} = usePopupControl(isOpenPopup, actions.toggleIsOpenGetPopup)
    return <div className="about__send send-about">
        <div className="send-about__body">
            <GoMail />
            <div className="send-about__info">
                <Title tag={"h3"} classnames={"send-about__title block-title"} text={"Send an inquiry and our managers will offer you the best deals."}/>
                <Text text={sendText}/>
            </div>
            <GreenButton onClick={togglePopup} classnames={"send-about__btn green-button_big"} text={"Get a quote"} type={"button"}/>
        </div>
    </div>
};

export default AboutSend;