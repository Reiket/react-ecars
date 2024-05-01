import React from 'react';
import {Title} from "../../../../../../../shared/components/Title/Title";
import Text from "../../../../../../../shared/components/Title/Text";
import GreenButton from "../../../../../../../shared/components/buttons/GreenButton/GreenButton";
import {cn} from "../../../../../../../shared/utils";
import {PItemsCommunication} from "../types/communication.types";
import {useAppSelector} from "../../../../../../../app/store/hooks";
import {selectIsOpenContactPopup, selectIsOpenGetPopup} from "../../../../../../Layout/store/selectors/layout-selector";
import usePopupControl from "../../../../../../../shared/hooks/usePopupControl";
import {actions} from "../../../../../../Layout/store/actions/layout-actios";

const CommunicationItem: React.FC<PItemsCommunication> = ({text, btnText, isContactText, title, icon}) => {
    const isOpenGetPopup = useAppSelector(selectIsOpenGetPopup)
    const isOpenContactPopup = useAppSelector(selectIsOpenContactPopup)
    const getPopup= usePopupControl(isOpenGetPopup, actions.toggleIsOpenGetPopup);
    const contactsPopup = usePopupControl(isOpenContactPopup, actions.toggleIsOpenContactPopup);

    return <div className="communication__item">
        <div className="communication__icon">{icon}</div>
        <Title tag={"h3"} classnames={"communication__title block-title"} text={title}/>
        <Text text={text} classnames={"communication__text"}/>
        <GreenButton onClick={!isContactText ? getPopup.togglePopup : contactsPopup.togglePopup}
                     classnames={cn("communication__button green-button_big", {
                         "green-button_white": isContactText
                     })}
                     text={btnText} type={"button"}/>
    </div>
};

export default CommunicationItem;