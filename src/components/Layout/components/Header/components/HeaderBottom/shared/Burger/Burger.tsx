import {BurgerPropsType} from "../shared.types";
import React from "react";
import {cn} from "../../../../../../../../shared/utils";


const Burger: React.FC<BurgerPropsType> = ({isBurger, setIsBurger}) => {
    const onClickBurger = () => {
        setIsBurger((prev) => !prev);
        document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden';
    }
    return <button onClick={onClickBurger} className={cn("icon-menu", {
        "_active": isBurger
    })}><span></span></button>
}

export default Burger;