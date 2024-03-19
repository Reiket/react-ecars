import React from 'react';
import {useClickOutside} from "../../../../../../../shared/hooks/useClickOutside";
import {PiMapPinFill} from "react-icons/pi";
import {PopupPropsType} from "./types/menu.types";
import {MdKeyboardArrowDown} from "react-icons/md";
import {MenuEnums, shipItemType} from "../../../types/header.types";
import {cn} from "../../../../../../../shared/utils";
import MenuList from "./components/MenuList";

const Menu: React.FC<PopupPropsType> = React.memo(({filters, type, onClickToFilters, isBurger, items, filter, text}) => {
        const ref = React.useRef<HTMLDivElement>(null)
        const {shipNumber, currency} = filters
        const [isPopupOpen, setIsPopupOpen] = React.useState(false);
        useClickOutside(ref, setIsPopupOpen)
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
        const itemClassNames = cn("info-header-top__item", {
            "info-header-top__item_burger": isBurger
        });
        return (
            <div ref={ref} className={itemClassNames}>
                {MenuEnums.selectShip === type && <PiMapPinFill/> }
                <span className="info-header-top__text info-text menu-text">{text}</span>
                {MenuEnums.selectShip === type && items[filter] && <img width={20} height={20} src={(items[filter] as shipItemType).img} alt="Flags"/>}

                <div className={cn("header-menu", {
                    "header-menu_nav": isBurger,
                })}>
                    <>
                        {MenuEnums.selectShip === type && items[filter] ? (items[filter] as shipItemType).country : items[filter]}
                    </>
                    <MdKeyboardArrowDown onClick={onClickToPopup} className={cn("header-menu__arrow", {
                        "active": isPopupOpen
                    })}/>
                    <MenuList filter={filter} type={type} isPopupOpen={isPopupOpen} items={items} onClickHandler={onClickHandler}/>
                </div>
            </div>
        )
    }
)
export default Menu;