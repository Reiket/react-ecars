import React from 'react';
import usePopupControl from "../../../../../../shared/hooks/usePopupControl";
import {useAppSelector} from "../../../../../../app/store/hooks";
import {selectIsOpenGetPopup} from "../../../../../Layout/store/selectors/layout-selector";
import {actions} from "../../../../../Layout/store/actions/layout-actios";
import PageSection from "../../../../../../shared/components/Section/PageSection";
import SendContent from "./components/SendContent";
import Button from "../../../../../../shared/components/buttons/GreenButton/Button";

const Send: React.FC = () => {
    const isOpenPopup = useAppSelector(selectIsOpenGetPopup)
    const {togglePopup} = usePopupControl(isOpenPopup, actions.toggleIsOpenGetPopup);
    return   <PageSection name={"send"} classnames={"section-home-page"}>
        <div className="send__body">
            <SendContent/>
            <div className="send__get">
                <Button onClick={togglePopup} type={"button"} size={"big"} classnames={"send__button"}>Get a quote</Button>
            </div>
        </div>
    </PageSection>
};

export default Send;