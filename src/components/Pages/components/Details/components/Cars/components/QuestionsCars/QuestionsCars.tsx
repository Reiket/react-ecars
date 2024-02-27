import React from 'react';
import GreenButton from "../../../../../../../../shared/components/GreenButton/GreenButton";
import BlockTitle from "../../../../../../../../shared/components/Title/BlockTitle";

const QuestionsCars: React.FC = () => {
    return  <div className="cars__questions questions-cars">
        <div className="questions-cars__body">
            <BlockTitle classnames={"questions-cars__title"} text={"Do you still have questions? Contact us for answers."}/>
            <p className="questions-cars__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
        <GreenButton href={"/contacts"} type={"link"} classnames={"questions-cars__button green-button_big"} text={"Contact Us"}/>
    </div>
}

export default QuestionsCars;