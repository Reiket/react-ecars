import {HeaderBurger} from "../shared.types";
import React from "react";
import {bodyOverflow, cn} from "../../../../../../../../shared/utils";
import {useLocation} from "react-router-dom";
import {useAppDispatch} from "../../../../../../../../app/store/hooks";
import {actions} from "../../../../../../store/actions/layout-actios";


const Burger: React.FC<HeaderBurger> = ({isBurger}) => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        dispatch(actions.toggleIsBurger(false))
    }, [dispatch, location])
    const onClickToBurger = () => {
        dispatch(actions.toggleIsBurger(!isBurger))
        bodyOverflow(!isBurger)
    }
    return <button onClick={onClickToBurger} className={cn("icon-menu", {
        "_active": isBurger
    })}><span></span></button>
}

export default Burger;