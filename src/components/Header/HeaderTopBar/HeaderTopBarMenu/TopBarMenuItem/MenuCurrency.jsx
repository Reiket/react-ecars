import React from 'react';
import CurrencyPopup from "./Popup/CurrencyPopup";

const MenuCurrency = ({isBurger}) => {
    const [currencyIndex, setCurrencyIndex]  = React.useState(0);
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const currencyRef = React.useRef();
    const onClickToPopup = () => {
        setIsPopupOpen(prev => !prev);
    }
    const onClickToCurrency = (id) => {
        setCurrencyIndex(id)
        setIsPopupOpen(false);
    }
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if(!event.composedPath().includes(currencyRef.current)) {
                setIsPopupOpen(false);
            }

        }
        document.body.addEventListener("click", handleClickOutside);
        return () => document.body.removeEventListener("click", handleClickOutside);
    }, [])

    return (
        <div ref={currencyRef} className="info-header-top__item info-header-top__item_none">
            <CurrencyPopup isBurger={isBurger} currencyIndex={ currencyIndex} onClickToPopup={onClickToPopup} isPopupOpen={isPopupOpen} onClickToCurrency={onClickToCurrency}/>
        </div>
    );
};

export default MenuCurrency;