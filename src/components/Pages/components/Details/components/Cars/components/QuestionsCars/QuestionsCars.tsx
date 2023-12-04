import React from 'react';
import GreenButton from "../../../../../../../../shared/components/GreenButton/GreenButton";

const QuestionsCars: React.FC = () => {
    return  <div className="cars__questions questions-cars">
        <div className="questions-cars__body">
            <h2 className="questions-cars__title">Do you still have questions? Contact us for answers.</h2>
            <div className="questions-cars__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</div>
        </div>
        <GreenButton type={"button"} classnames={"questions-cars__button green-button green-button_big"} text={"Contact Us"}/>
    </div>
}

export default QuestionsCars;