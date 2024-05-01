import React from 'react';
import GreenButton from "../../../../../../../shared/components/buttons/GreenButton/GreenButton";
import {contacts} from "../../../../../../../shared/Contacts/contacts-aray";
import {useAppSelector} from "../../../../../../../app/store/hooks";
import {selectIsOpenGetPopup} from "../../../../../../Layout/store/selectors/layout-selector";
import usePopupControl from "../../../../../../../shared/hooks/usePopupControl";
import {actions} from "../../../../../../Layout/store/actions/layout-actios";
import IntroInfo from "./IntroInfo";

const IntroContacts = () => {
    const isOpenPopup = useAppSelector(selectIsOpenGetPopup)
    const {togglePopup} = usePopupControl(isOpenPopup, actions.toggleIsOpenGetPopup);
    return <div className="intro__contacts">
        <GreenButton onClick={togglePopup} type={"button"}
                     classnames={"intro__button green-button_big"} text={"Get a quote"}/>
        <IntroInfo/>
    </div>
};

export default IntroContacts;