import {BurgerPropsType} from "../shared.types";
import React from "react";


const Burger: React.FC<BurgerPropsType> = ({isBurger, setIsBurger}) => {
    const onClickBurger = () => {
        setIsBurger((prev) => !prev);
        document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden';
    }
    return <button onClick={onClickBurger} className={isBurger ? "icon-menu _active" : "icon-menu"}><span></span></button>
}

export default Burger;