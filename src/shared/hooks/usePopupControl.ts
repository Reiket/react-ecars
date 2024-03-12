import {useAppDispatch} from "../../app/store/hooks";
import {Action} from "redux";
import {useClickOutside} from "./useClickOutside";
import {useRef} from "react";

type CallbackFunction = (isOpenPopup: boolean) => Action;
const usePopupControl = (isOpenPopup: boolean, callback: CallbackFunction) => {
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement | null>(null)
    useClickOutside(ref,() => {
        if (isOpenPopup) {
            document.body.style.overflow = isOpenPopup ? '' : 'hidden';
        }
        dispatch(callback(false))
    })
    const togglePopup = () => {
        document.body.style.overflow = isOpenPopup ? '' : 'hidden';
        dispatch(callback(!isOpenPopup));
    };
    return { togglePopup, ref };
};

export default usePopupControl;