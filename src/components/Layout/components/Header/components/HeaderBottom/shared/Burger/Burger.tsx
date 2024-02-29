import {BurgerPropsType} from "../shared.types";
import React from "react";
import {cn} from "../../../../../../../../shared/utils";
import {useLocation} from "react-router-dom";


const Burger: React.FC<BurgerPropsType> = ({isBurger, setIsBurger}) => {
    const location = useLocation()
    React.useEffect(() => {
        setIsBurger(false)
        document.body.style.overflow = '';
    }, [location])
    const onClickBurger = () => {
        setIsBurger(!isBurger);
        document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden';
    }
    return <button onClick={onClickBurger} className={cn("icon-menu", {
        "_active": isBurger
    })}><span></span></button>
}

export default Burger;