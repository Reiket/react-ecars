import React from 'react';
import GreenButton from "../../../../../../shared/components/buttons/GreenButton/GreenButton";
import usePopupControl from "../../../../../../shared/hooks/usePopupControl";
import {useAppSelector} from "../../../../../../app/store/hooks";
import {selectIsOpenGetPopup} from "../../../../../Layout/store/selectors/layout-selector";
import {actions} from "../../../../../Layout/store/actions/layout-actios";
import PageSection from "../../../../../../shared/components/Section/PageSection";
import SendContent from "./components/SendContent";

const Send: React.FC = () => {
    const isOpenPopup = useAppSelector(selectIsOpenGetPopup)
    const {togglePopup} = usePopupControl(isOpenPopup, actions.toggleIsOpenGetPopup);
    return   <PageSection name={"send"} classnames={"section-home-page"}>
        <div className="send__body">
            <SendContent/>
            <div className="send__get">
                <GreenButton onClick={togglePopup} type={"button"} classnames={"send__button green-button_big"}
                             text={"Get a quote"}/>
            </div>
        </div>
    </PageSection>
};

export default Send;