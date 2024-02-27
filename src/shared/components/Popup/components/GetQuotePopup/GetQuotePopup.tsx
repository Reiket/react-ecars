import React from 'react';
import Popup from "../../Popup";
import Title from "../../../Title/Title";
import GreenButton from "../../../GreenButton/GreenButton";
import {selectIsOpenPopup} from "../../../../../components/Layout/store/selectors/layout-selector";
import {useClickOutside} from "../../../../hooks/useClickOutside";
import {actions} from "../../../../../components/Layout/store/actions/layout-actios";
import {useAppDispatch, useAppSelector} from "../../../../../app/store/hooks";

const GetQuotePopup: React.FC = () => {
    const isOpenPopup = useAppSelector(selectIsOpenPopup)
    const dispatch = useAppDispatch()
    const ref = React.useRef<HTMLDivElement | null>(null)
    useClickOutside(ref, () => {
        if (isOpenPopup) {
            document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden';
        }
        dispatch(actions.toggleIsPopupOpen(false));
    })
    return <Popup  isOpenPopup={isOpenPopup}>
        <div ref={ref} className="get-quote">
            <Title text={"Get a quote"}/>
            <form className="get-quote__form">
                <label className="get-quote__label">
                    <span>Email</span>
                    <input type="email" className="get-quote__input"/>
                </label>
                <label className="get-quote__label">
                    <span>Name</span>
                    <input type="text" className="get-quote__input"/>
                </label>
                <label className="get-quote__label">
                    <span>Brand</span>
                    <select className={"get-quote__select"} name="" id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                </label>
                <GreenButton classnames={"get-quote__btn"} text={"Send"} type={"button"}/>
            </form>
        </div>
    </Popup>
};

export default GetQuotePopup;