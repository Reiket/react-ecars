import {useAppDispatch} from "../../app/store/hooks";
import {Action} from "redux";
import {useClickOutside} from "./useClickOutside";
import React, {useRef} from "react";
import {bodyOverflow} from "../utils";

type CallbackFunction = (isOpenPopup: boolean) => Action;
const usePopupControl = (isOpenPopup: boolean, callback: CallbackFunction, popupId = "popup") => {
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement | null>(null)
    const handleClosePopup = () => {
        dispatch(callback(false))
    }
    const handleEscKeyPress  = (event: globalThis.KeyboardEvent) => {
        if (event.key === "Escape" && isOpenPopup) {
            handleClosePopup()
        }
    }
    React.useEffect(() => {
        bodyOverflow(isOpenPopup)
        document.addEventListener('keydown', handleEscKeyPress)
        return () => {
            document.body.style.overflow = ''
            document.removeEventListener("keydown", handleEscKeyPress)
        }
    }, [isOpenPopup])
    useClickOutside(ref, handleClosePopup)
    const togglePopup = () => {
        dispatch(callback(!isOpenPopup));
    };
    return { togglePopup, ref };
};

export default usePopupControl;