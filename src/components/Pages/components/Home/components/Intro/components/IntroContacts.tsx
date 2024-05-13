import React from 'react';
import {useAppSelector} from "../../../../../../../app/store/hooks";
import {selectIsOpenGetPopup} from "../../../../../../Layout/store/selectors/layout-selector";
import usePopupControl from "../../../../../../../shared/hooks/usePopupControl";
import {actions} from "../../../../../../Layout/store/actions/layout-actios";
import IntroInfo from "./IntroInfo";
import Button from "../../../../../../../shared/components/buttons/GreenButton/Button";

const IntroContacts = () => {
    const isOpenPopup = useAppSelector(selectIsOpenGetPopup)
    const {togglePopup} = usePopupControl(isOpenPopup, actions.toggleIsOpenGetPopup);
    return <div className="intro__contacts">
        <Button onClick={togglePopup} type={"button"} size={"big"} classnames={"intro__button"}>Get a quote</Button>
        <IntroInfo/>
    </div>
};

export default IntroContacts;