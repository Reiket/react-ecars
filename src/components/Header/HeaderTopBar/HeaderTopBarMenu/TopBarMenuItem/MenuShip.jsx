import React from 'react';
import {PiMapPinFill} from "react-icons/pi";
import {MdKeyboardArrowDown} from "react-icons/md";
import shipItem from "../../../../../json/shipItem.json"
import {isMobile} from "react-device-detect";

const MenuShip = ({changeShipNumber, isBurger, shipNumber}) => {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const shipRef = React.useRef();
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if(!event.composedPath().includes(shipRef.current)) {
                setIsPopupOpen(false);
            }

        }
        document.body.addEventListener("click", handleClickOutside);
        return () => document.body.removeEventListener("click", handleClickOutside);
    }, [])
    const onClickToPopup = () => {
        setIsPopupOpen(prev => !prev);
    }
    const onClickToShipItem = (id) => {
        changeShipNumber(id)
        setIsPopupOpen(false);
    }
    return (
        <div ref={shipRef} className={isBurger ? "info-header-top__item info-header-top__item_burger" : "info-header-top__item"}>
            <PiMapPinFill/>
            <span className={"info-header-top__text"}>Ship to:</span>
            <img width={20} height={20} src={shipItem[shipNumber].img} alt="Flags"/>
            <div className={isBurger ? "header-menu header-menu_nav" : "header-menu"}>
                {shipItem[shipNumber].country}
                <MdKeyboardArrowDown onClick={onClickToPopup} className={isPopupOpen ? "header-menu__arrow active" : "header-menu__arrow"}/>
                <ul className={  isPopupOpen && isMobile ? "header-menu__list header-menu__list_burger active" : "header-menu__list"}>
                    {shipItem.map((item, id) => <li key={id} onClick={() => onClickToShipItem(id)} className={id === shipNumber ? "header-menu__point active" : "header-menu__point"}>
                        <img src={item.img} alt="Flags"/>
                        {item.country}
                    </li>)}
                </ul>
            </div>
        </div>
    );
};

export default MenuShip;