import React from 'react';
import {MdKeyboardArrowDown} from "react-icons/md";
import shipItem from "../../../../../../json/shipItem.json"
import {isMobile} from "react-device-detect";

const ShipPopup = ({isBurger}) => {
    const [shipIndex, setShipIndex] = React.useState(0);
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const onClickToPopup = () => {
        setIsPopupOpen(prev => !prev);
    }
    const onClickToShipItem = (id) => {
        setShipIndex(id)
        setIsPopupOpen(false);
    }
    return (
        <>
            <span className={isBurger ? "info-header-top__text info-header-top__text_burger" : "info-header-top__text"}>Ship to:</span>
            <img width={20} height={20} src={shipItem[shipIndex].img} alt="Flags"/>
            <div className={isBurger ? "header-menu header-menu_nav" : "header-menu"}>
                {shipItem[shipIndex].country}
                <MdKeyboardArrowDown onClick={onClickToPopup} className={isPopupOpen ? "header-menu__arrow active" : "header-menu__arrow"}/>
                <ul className={  isPopupOpen && isMobile ? "header-menu__list header-menu__list_burger active" : "header-menu__list"}>
                    {shipItem.map((item, id) => <li key={id} onClick={() => onClickToShipItem(id)} className={id === shipIndex ? "header-menu__point active" : "header-menu__point"}>
                        <img src={item.img} alt="Flags"/>
                        {item.country}
                    </li>)}
                </ul>
            </div>
        </>
    );
};

export default ShipPopup;