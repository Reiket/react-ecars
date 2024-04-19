import React from 'react';
import DetailsPopup from "./components/DetailsPopup/DetailsPopup";
import {contacts} from "../../../../../../../../../../../../shared/Contacts/contacts-aray";
import GreenButton from "../../../../../../../../../../../../shared/components/buttons/GreenButton/GreenButton";
import {bodyOverflow} from "../../../../../../../../../../../../shared/utils";
import {Title} from "../../../../../../../../../../../../shared/components/Title/Title";

const SellBottom = () => {
    const [isOpenPopup, setIsOpenPopup] = React.useState(false)
    const onClickToPopup = () => {
        bodyOverflow(isOpenPopup)
        setIsOpenPopup(prev => !prev);
    }
    return <>
        <DetailsPopup setIsOpenPopup={setIsOpenPopup} isOpenPopup={isOpenPopup}/>
        <div className="sell-details__bottom bottom-sell">
            <Title tag={"h3"} classnames={"item-title_small"}  text={"Interested in this car or want a personalized offer of the best deals?"}/>
            <p className="bottom-sell__text">
                Contact us and our manager will give you all the information you need.
            </p>
            <GreenButton classnames={"bottom-sell__button green-button_big"} text={"Check availability"} type={"button"} onClick={onClickToPopup}/>
            <div className="bottom-sell__contacts">
                {[...contacts].slice(4, 6).map((c, id) => (
                    <a key={id} href={c.url} className="bottom-sell__link">{c.icon}{c.text}</a>
                ))}
            </div>
        </div>
    </>
}

export default SellBottom;