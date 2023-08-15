import React from 'react';
import {MdKeyboardArrowDown} from "react-icons/md";

const ShipPopup = ({isBurger}) => {
    const [shipIndex, setShipIndex] = React.useState(0);
    const shipItem = [
        { img: "/assets/image/icons/flags/canada.svg",
            country: "Canada"
        } ,
        { img: "/assets/image/icons/flags/usa.svg",
            country: "USA"
        } ,
        { img: "/assets/image/icons/flags/europe.svg",
            country: "EU"
        } ,
    ]
    return (
        <>
            <span className={isBurger ? "info-header-top__text info-header-top__text_burger" : "info-header-top__text"}>Ship to:</span>
            <img width={20} height={20} src={shipItem[shipIndex].img} alt="Flags"/>
            <div className={isBurger ? "header-menu header-menu_nav" : "header-menu"}>
                {shipItem[shipIndex].country}
                <MdKeyboardArrowDown className={"header-menu__arrow"}/>
                <ul className={isBurger ? "header-menu__list header-menu__list_burger" : "header-menu__list"}>
                    {shipItem.map((item, id) => <li key={id} onClick={() => setShipIndex(id)} className={id === shipIndex ? "header-menu__point active" : "header-menu__point"}>
                        <img src={item.img} alt="Flags"/>
                        {item.country}
                    </li>)}
                </ul>
            </div>
        </>
    );
};

export default ShipPopup;