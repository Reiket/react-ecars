import React from 'react';
import {MdKeyboardArrowDown} from "react-icons/md";

const CurrencyPopup = ({isBurger}) => {
    const [currencyIndex, setCurrencyIndex]  = React.useState(0);

    const currency = ["USD", "EUR", "GBP"];
    return (
       <>
           <span className={isBurger ? "info-header-top__text info-header-top__text_burger" : "info-header-top__text"}>Currency:</span>
           <div className={isBurger ? "header-menu_nav header-menu" : "header-menu"}>
               {currency[currencyIndex]}
               <MdKeyboardArrowDown className={"info-header-top__arrow header-menu__arrow"}/>
               <ul className={isBurger ? "header-menu__list header-menu__list_burger" : "header-menu__list"}>
                   {currency.map((cur, id) => <li key={id} onClick={() => setCurrencyIndex(id)} className={currencyIndex === id ? "info-header-top__point header-menu__point active" : "info-header-top__point header-menu__point"}>
                       {cur}
                   </li>)}
               </ul>
           </div>
       </>
    );
};

export default CurrencyPopup;