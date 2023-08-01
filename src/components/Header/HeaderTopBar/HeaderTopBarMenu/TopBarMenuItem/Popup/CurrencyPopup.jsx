import React from 'react';
import {MdKeyboardArrowDown} from "react-icons/md";

const CurrencyPopup = ({isBurger}) => {
    return (
       <>
           <span className={isBurger ? "info-header-top__text info-header-top__text_burger" : "info-header-top__text"}>Currency:</span>
           <div className={isBurger ? "header-menu_nav header-menu" : "header-menu"}>
               USD
               <MdKeyboardArrowDown className={"info-header-top__arrow header-menu__arrow"}/>
               <ul className={isBurger ? "header-menu__list header-menu__list_burger" : "header-menu__list"}>
                   <li className="info-header-top__point header-menu__point">
                       EUR
                   </li>
                   <li className="info-header-top__point header-menu__point">
                       GBP
                   </li>
               </ul>
           </div>
       </>
    );
};

export default CurrencyPopup;