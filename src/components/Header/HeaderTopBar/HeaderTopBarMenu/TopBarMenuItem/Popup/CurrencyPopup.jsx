import React from 'react';
import {MdKeyboardArrowDown} from "react-icons/md";
import {isMobile} from "react-device-detect";

const CurrencyPopup = ({isBurger, currencyIndex, onClickToPopup, isPopupOpen, onClickToCurrency}) => {
    const currency = ["USD", "EUR", "GBP"];
    return (
       <>
           <span className={isBurger ? "info-header-top__text info-header-top__text_burger" : "info-header-top__text"}>Currency:</span>
           <div className={isBurger ? "header-menu_nav header-menu" : "header-menu"}>
               {currency[currencyIndex]}
               <MdKeyboardArrowDown onClick={onClickToPopup} className={isPopupOpen ? "header-menu__arrow active" : "header-menu__arrow"}/>
               <ul className={isPopupOpen && isMobile ? "header-menu__list header-menu__list_burger active" : "header-menu__list"}>
                   {currency.map((cur, id) => <li key={id} onClick={() => onClickToCurrency(id)} className={currencyIndex === id ? "info-header-top__point header-menu__point active" : "info-header-top__point header-menu__point"}>
                       {cur}
                   </li>)}
               </ul>
           </div>
       </>
    );
};

export default CurrencyPopup;