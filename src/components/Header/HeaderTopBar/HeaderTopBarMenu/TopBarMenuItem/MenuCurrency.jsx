import React from 'react';
import {MdKeyboardArrowDown} from "react-icons/md";
import {isMobile} from "react-device-detect";

const MenuCurrency = ({isBurger, changeCurrency, currency}) => {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const currencyRef = React.useRef();
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if(!event.composedPath().includes(currencyRef.current)) {
                setIsPopupOpen(false);
            }

        }
        document.body.addEventListener("click", handleClickOutside);
        return () => document.body.removeEventListener("click", handleClickOutside);
    }, [])
    const onClickToPopup = () => {
        setIsPopupOpen(prev => !prev);
    }
    const onClickToCurrency = (id) => {
        setIsPopupOpen(false);
        changeCurrency(id);
    }
    const currencyItem = ["USD", "EUR", "GBP"];
    return (
        <div ref={currencyRef} className={isBurger ? "info-header-top__item info-header-top__item_burger" : "info-header-top__item"}>
            <span className={"info-header-top__text"}>Currency:</span>
            <div className={isBurger ? "header-menu_nav header-menu" : "header-menu"}>
                {currencyItem[currency]}
                <MdKeyboardArrowDown onClick={onClickToPopup} className={isPopupOpen ? "header-menu__arrow active" : "header-menu__arrow"}/>
                <ul className={isPopupOpen && isMobile ? "header-menu__list header-menu__list_burger active" : "header-menu__list"}>
                    {currencyItem.map((cur, id) => <li key={id} onClick={() => onClickToCurrency(id, currencyItem[currency])} className={currency === id ? "info-header-top__point header-menu__point active" : "info-header-top__point header-menu__point"}>
                        {cur}
                    </li>)}
                </ul>
            </div>
        </div>
    );
};

export default MenuCurrency;