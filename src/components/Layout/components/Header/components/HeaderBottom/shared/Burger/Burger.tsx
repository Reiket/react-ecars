import {BurgerPropsType} from "../shared.types";
import React from "react";
import {bodyOverflow, cn} from "../../../../../../../../shared/utils";
import {useLocation} from "react-router-dom";


const Burger: React.FC<BurgerPropsType> = ({isBurger, setIsBurger}) => {
    const location = useLocation()
    React.useEffect(() => {
        setIsBurger(false)
    }, [location])
    React.useEffect(() => {
        bodyOverflow(isBurger)
    }, [isBurger])
    const onClickBurger = () => {
        setIsBurger(!isBurger);
    }
    return <button onClick={onClickBurger} className={cn("icon-menu", {
        "_active": isBurger
    })}><span></span></button>
}

export default Burger;