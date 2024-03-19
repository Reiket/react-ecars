import React from 'react';
import GreenButton from "../../../../../../../../shared/components/GreenButton/GreenButton";
import usePopupControl from "../../../../../../../../shared/hooks/usePopupControl";
import {actions} from "../../../../../../../Layout/store/actions/layout-actios";
import {useAppSelector} from "../../../../../../../../app/store/hooks";
import {selectIsOpenContactPopup} from "../../../../../../../Layout/store/selectors/layout-selector";
import {Title} from "../../../../../../../../shared/components/Title/Title";

const QuestionsCars: React.FC = () => {
    const isOpenContactPopup = useAppSelector(selectIsOpenContactPopup)
    const {togglePopup} = usePopupControl(isOpenContactPopup, actions.toggleIsOpenContactPopup);
    return  <div className="cars__questions questions-cars">
        <div className="questions-cars__body">
            <Title tag={"h3"} classnames={"questions-cars__title block-title"} text={"Do you still have questions? Contact us for answers."}/>
            <p className="questions-cars__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
        <GreenButton onClick={togglePopup}  type={"button"} classnames={"questions-cars__button green-button_big"} text={"Contact Us"}/>
    </div>
}

export default QuestionsCars;