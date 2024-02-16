import React from 'react';
import DetailsPopup from "./components/DetailsPopup/DetailsPopup";
import {useClickOutside} from "../../../../../../../../../../../../shared/hooks/useClickOutside";
import {contacts} from "../../../../../../../../../../../../shared/Contacts/contacts-aray";
import ItemTitle from "../../../../../../../../../../../../shared/components/Title/ItemTitle";

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
            <ItemTitle classnames={"bottom-sell__title"} text={"Interested in this car or want a personalized offer of the best deals?"} size={"small"}/>
            <p className="bottom-sell__text">
                Contact us and our manager will give you all the information you need.
            </p>
            <button ref={detailsRef} onClick={onClickToPopup}
                    className="bottom-sell__button green-button green-button_big">Check availability
            </button>
            <div className="bottom-sell__contacts">
                {[...contacts].slice(4, 6).map((c, id) => (
                    <a key={id} href={c.url} className="bottom-sell__link">{c.icon}{c.text}</a>
                ))}
            </div>
        </div>
    </>
}

export default SellBottom;