import React from 'react';
import DetailsPopup from "../../../../../../../../../../../Other/Popup/DetailsPopup";
import {useClickOutside} from "../../../../../../../../../../../../utils/hooks/useClickOutside";
import {contacts} from "../../../../../../../../../../../../shared/Contacts/contacts-aray";

const SellBottom = () => {
    const [isOpenPopup, setIsPopupOpen] = React.useState(false)
    const detailsRef = React.useRef<HTMLButtonElement | null>(null)
    const onClickToPopup = () => {
        document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden';
        setIsPopupOpen(prev => !prev);
    }
    useClickOutside(detailsRef, () => {
        if (isOpenPopup) {
            document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden';
        }
        setIsPopupOpen(false)
    })
    return <>
        <DetailsPopup isOpenPopup={isOpenPopup}/>
        <div className="sell-details__bottom bottom-sell">
            <h5 className="bottom-sell__title">Interested in this car or want a personalized offer of the best
                deals?</h5>
            <div className="bottom-sell__text">Contact us and our manager will give you all the information you need.
            </div>
            <button ref={detailsRef} onClick={onClickToPopup}
                    className="bottom-sell__button green-button green-button_big">Check availability
            </button>
            <div className="bottom-sell__contacts">
                {[...contacts.slice(4, 6).map((c, id) => (
                    <a key={id} href={c.url} className="bottom-sell__link">{c.icon}{c.text}</a>
                ))]}
            </div>
        </div>
    </>
}

export default SellBottom;