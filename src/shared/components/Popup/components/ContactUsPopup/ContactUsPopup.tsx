import React from 'react';
import {useAppSelector} from "../../../../../app/store/hooks";
import {selectIsOpenContactPopup} from "../../../../../components/Layout/store/selectors/layout-selector";
import Popup from "../../Popup";
import Title from "../../../Title/Title";
import Text from "../../../Title/Text";
import {contacts} from "../../../../Contacts/contacts-aray";
import {actions} from "../../../../../components/Layout/store/actions/layout-actios";
import usePopupControl from "../../../../hooks/usePopupControl";

const ContactUsPopup = () => {
    const isOpenPopup = useAppSelector(selectIsOpenContactPopup)
    const {ref} = usePopupControl(isOpenPopup, actions.toggleIsOpenContactPopup);
    return <Popup isOpenPopup={isOpenPopup}>
        <div ref={ref} className="contact-popup">
            <Title text={"Contact Us"} classnames={"contact-popup__title"}/>
            <Text classnames={"contact-popup__text"} text={"You can contact us by phone, mail or find us on social networks"}/>
            <div className="contact-popup__content">
                <div className="contact-popup__buttons">
                    {contacts.slice(4, 6).map((item, id) => (
                        <a href={item.url} key={id} className="contact-popup__btn">{item.icon}{item.text}</a>
                    ))}
                </div>
                <div className="contact-popup__social">
                    {contacts.slice(0, 4).map((item, id) => (
                        <a href={item.url} key={id} className="contact-popup__link">{item.icon}</a>
                    ))}
                </div>
            </div>
        </div>
    </Popup>
};

export default ContactUsPopup;