import {actions} from "../../components/Layout/store/actions/layout-actios";
import {selectIsOpenPopup} from "../../components/Layout/store/selectors/layout-selector";
import {useAppDispatch, useAppSelector} from "../../app/store/hooks";

const usePopupControl = () => {
    const dispatch = useAppDispatch();
    const isOpenPopup = useAppSelector(selectIsOpenPopup);
    const togglePopup = () => {
        document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden';
        dispatch(actions.toggleIsPopupOpen(!isOpenPopup));
    };
    return { isOpenPopup, togglePopup };
};

export default usePopupControl;