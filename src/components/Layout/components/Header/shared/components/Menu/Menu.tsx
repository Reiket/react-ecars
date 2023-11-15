import React, {ChangeEvent} from 'react';
import {useClickOutside} from "../../../../../../../utils/hooks/useClickOutside";
import {PiMapPinFill} from "react-icons/pi";
import {PopupPropsType} from "./types/menu.types";
import {MdKeyboardArrowDown} from "react-icons/md";
import {isMobile} from "react-device-detect";
import {MenuEnums, shipItemType} from "../../../types/header.types";

const Menu: React.FC<PopupPropsType> = ({filters, type, onClickToFilters, isBurger, items, filter, text}) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const {shipNumber, currency} = filters
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    useClickOutside(ref, (e: ChangeEvent<HTMLDivElement>) => {
        if (e.target !== ref.current) {
            setIsPopupOpen(false);
        }
    })
    const onClickToPopup = () => {
        setIsPopupOpen(prev => !prev);
    }
    const onClickHandler = (id: number) => {
        setIsPopupOpen(false);
        if(type === MenuEnums.selectShip) {
            onClickToFilters(id, currency)
        } else if(type === MenuEnums.selectCurrency) {
            onClickToFilters(shipNumber, id)
        }
    }
    return (
        <div ref={ref} className={isBurger ? "info-header-top__item info-header-top__item_burger" : "info-header-top__item"}>
            {MenuEnums.selectShip === type && <PiMapPinFill/> }
            <span className={"info-header-top__text"}>{text}</span>
            {MenuEnums.selectShip === type && items[filter] && <img width={20} height={20} src={(items[filter] as shipItemType).img} alt="Flags"/>}

            <div className={isBurger ? "header-menu header-menu_nav" : "header-menu"}>
                <>{MenuEnums.selectShip === type && items[filter] ? (items[filter] as shipItemType).country : items[filter]}</>
                <MdKeyboardArrowDown onClick={onClickToPopup} className={isPopupOpen ? "header-menu__arrow active" : "header-menu__arrow"}/>
                <ul className={  isPopupOpen && isMobile ? "header-menu__list header-menu__list_burger active" : "header-menu__list"}>
                    {items.map((item, id) => <li key={id} onClick={() => onClickHandler(id)} className={id === filter ? "header-menu__point active" : "header-menu__point"}>
                            { MenuEnums.selectShip === type ? (
                                <>
                                    {item && (item as shipItemType).img &&  <img src={(item as shipItemType).img} alt="Flags"/>}
                                    {item && (item as shipItemType).country && (item as shipItemType).country}
                                </>
                            ) : (item) as string[]
                            }
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Menu;